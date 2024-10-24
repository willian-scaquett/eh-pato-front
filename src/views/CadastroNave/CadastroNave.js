import { Button, Dialog, DialogActions, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './CadastroNave.css';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { buscarValoresSelectsCadastro, cadastrarNave, editarNave } from '../../requests';
import Resposta from '../Resposta/Resposta';

export default function CadastroNave({cadastroAberto, fecharCadastro, carregarNaves, naveEditar}) {
  const [nome, setNome] = useState("")
  const [cor, setCor] = useState("AMARELA");
  const [tamanho, setTamanho] = useState("PEQUENA");
  const [localQueda, setLocalQueda] = useState("AMERICA");
  const [armamento, setArmamento] = useState("BOMBA");
  const [tipoCombustivel, setTipoCombustivel] = useState("PLUTONIO");
  const [grauAvaria, setGrauAvaria] = useState("SEM_AVARIAS");
  const [potencialTecnologico, setPotencialTecnologico] = useState("PRIMITIVA");
  const [totalTripulanteBem, setTotalTripulanteBem] = useState(0);
  const [totalTripulanteFerido, setTotalTripulanteFerido] = useState(0);
  const [totalTripulanteFoiComDeus, setTotalTripulanteFoiComDeus] = useState(0);
  const [respostaAberta, setRespostaAberta] = useState(false);
  const [classificacao, setClassificao] = useState(null);
  const [periculosidade, setPericulosidade] = useState(null);
  const [erro, setErro] = useState("");
  
  const [listas, setListas] = useState([]);

  useEffect(() => {
    buscarValoresListas()
    if (naveEditar) {
      setNome(naveEditar.nome);
      setCor(naveEditar.cor);
      setTamanho(naveEditar.tamanho);
      setLocalQueda(naveEditar.localQueda);
      setArmamento(naveEditar.armamento);
      setTipoCombustivel(naveEditar.tipoCombustivel);
      setGrauAvaria(naveEditar.grauAvaria);
      setPotencialTecnologico(naveEditar.potencialTecnologico);
      setTotalTripulanteBem(naveEditar.totalTripulanteBem);
      setTotalTripulanteFerido(naveEditar.totalTripulanteFerido);
      setTotalTripulanteFoiComDeus(naveEditar.totalTripulanteFoiComDeus);
    }
  }, [naveEditar]);
  
  const buscarValoresListas = () => {
    buscarValoresSelectsCadastro().then((response) => setListas(response));
  }

  const salvarCadastro = () => {
    setErro(null);
    if (naveEditar) {
      console.log(naveEditar)
      editarNave(
        {
          id: naveEditar.id,
          nome,
          cor,
          tamanho,
          localQueda,
          armamento,
          tipoCombustivel,
          grauAvaria,
          potencialTecnologico,
          totalTripulanteBem,
          totalTripulanteFerido,
          totalTripulanteFoiComDeus
        }
      ).then((response) => {
        carregarNaves();
        setPericulosidade(response.periculosidade);
        setClassificao(response.classificacao);
        abrirResposta();
      }).catch((erro) => {
        setErro(erro);
        abrirResposta();  
      });;
    } else {
      cadastrarNave({
        nome,
        cor,
        tamanho,
        localQueda,
        armamento,
        tipoCombustivel,
        grauAvaria,
        potencialTecnologico,
        totalTripulanteBem,
        totalTripulanteFerido,
        totalTripulanteFoiComDeus
      }).then((response) => {
        carregarNaves();
        setPericulosidade(response.periculosidade);
        setClassificao(response.classificacao);
        abrirResposta();
      }).catch((erro) => {
        setErro(erro);
        abrirResposta();  
      });
    }
  }

  const limpar = () => {
    setNome("")
    setCor("AMARELA");
    setTamanho("PEQUENA");
    setLocalQueda("AMERICA");
    setArmamento("BOMBA");
    setTipoCombustivel("PLUTONIO");
    setGrauAvaria("SEM_AVARIAS");
    setPotencialTecnologico("PRIMITIVA");
    setTotalTripulanteBem(0);
    setTotalTripulanteFerido(0);
    setTotalTripulanteFoiComDeus(0);
    setClassificao("");
    setPericulosidade("");
    setErro("")
  }

  const abrirResposta = () => {
    setRespostaAberta(true);
  }

  const fecharResposta = () => {
    console.log(erro)
    setRespostaAberta(false);
    if (!erro) {
      fecharCadastro();
      limpar();
    }
  }

  return (
      <Dialog
        open={cadastroAberto}
        onClose={fecharCadastro}
        PaperProps={{
          style: { width: '600px'}
        }}
      >
        <Resposta
          respostaAberta={respostaAberta}
          fecharResposta={fecharResposta}
          conteudo={
            <>
              {!erro &&
                <>
                  <p><b>SUCESSO!</b></p>
                  <br/><br/>
                  <p><b>Classificação:</b> {classificacao}
                  <br/><b>Periculosidade:</b> {periculosidade}</p>
                  <br/><br/>
                  <p>Acreditamos que boas naves sempre valem o risco, mesmo assim, tenha cuidado!</p>
                </>
              }
              {erro && erro.status === 400 &&
                <>
                  <p><b>Opa...</b></p>
                  <p>Já existe uma nave com esse nome.</p>
                </>
              }
              {erro && erro.status !== 400 &&
                <>
                  <p><b>Opa...</b></p>
                  <p>Ocorreu um problema =(</p>
                  <p>{ erro.message }</p>
                </>
              }
            </>
          }
        />
        <div className="formulario">
          {!naveEditar && <h2>Formulário de cadastro</h2>}
          {naveEditar && <h2>Formulário de edição #{naveEditar.id}</h2>}
          <div className="linha">
            <div className="campo">
              <TextField
                onChange={(event) => setNome(event.target.value)}
                value={nome}
                label="Nome"
                variant="standard"
                sx={{ margin: "0 10px" }}
                fullWidth
              />
            </div>
          </div>
          <div className="linha">
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 220, maxWidth: 220 }}>
                <InputLabel>Cor</InputLabel>
                <Select
                  value={cor}
                  onChange={(event) => setCor(event.target.value)}
                >
                  {listas.cores && listas.cores.map((cor) => (<MenuItem value={cor.value}>{cor.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 220, maxWidth: 220 }}>
                <InputLabel>Local da Queda</InputLabel>
                <Select
                  value={localQueda}
                  onChange={(event) => setLocalQueda(event.target.value)}
                >
                  {listas.locais && listas.locais.map((local) => (<MenuItem value={local.value}>{local.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="linha">
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 220, maxWidth: 220 }}>
                <InputLabel>Armamento</InputLabel>
                <Select
                  value={armamento}
                  onChange={(event) => setArmamento(event.target.value)}
                >
                  {listas.armamentos && listas.armamentos.map((arma) => (<MenuItem value={arma.value}>{arma.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 220, maxWidth: 220 }}>
                <InputLabel>Tamanho</InputLabel>
                <Select
                  value={tamanho}
                  onChange={(event) => setTamanho(event.target.value)}
                >
                  {listas.tamanhos && listas.tamanhos.map((t) => (<MenuItem value={t.value}>{t.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="linha">
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 520, maxWidth: 520 }}>
                <InputLabel>Tipo de Combustível</InputLabel>
                <Select
                  value={tipoCombustivel}
                  onChange={(event) => setTipoCombustivel(event.target.value)}
                >
                  {listas.combustiveis && listas.combustiveis.map((combustivel) => (<MenuItem value={combustivel.value}>{combustivel.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="linha">
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 220, maxWidth: 220 }} fullWidth>
                <InputLabel>Grau de Avaria</InputLabel>
                <Select
                  value={grauAvaria}
                  onChange={(event) => setGrauAvaria(event.target.value)}
                >
                  {listas.graus && listas.graus.map((grau) => (<MenuItem value={grau.value}>{grau.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 220, maxWidth: 220 }} fullWidth>
                <InputLabel>Potencial Tecnológico</InputLabel>
                <Select
                  value={potencialTecnologico}
                  onChange={(event) => setPotencialTecnologico(event.target.value)}
                >
                  {listas.potenciais && listas.potenciais.map((potencial) => (<MenuItem value={potencial.value}>{potencial.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="linha">
            <p style={{ margin: "12px 0 0 37px" }}>Tripulantes:</p>
            <div className="campo">
              <TextField
                label="Bem"
                type="number"
                variant="standard"
                value={totalTripulanteBem}
                onKeyDown={(event) => event.preventDefault()}
                onChange={(event) => setTotalTripulanteBem(event.target.value) }
                inputProps={{ min: 0 }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                sx={{
                  maxWidth: '80px',
                  minWidth: '80px'
                }}
              />
            </div>
            <div className="campo">
              <TextField
                label="Feridos"
                type="number"
                variant="standard"
                value={totalTripulanteFerido}
                onKeyDown={(event) => event.preventDefault()}
                onChange={(event) => setTotalTripulanteFerido(event.target.value) }
                inputProps={{ min: 0 }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                sx={{
                  maxWidth: '80px',
                  minWidth: '80px'
                }}
              />
            </div>
            <div className="campo">
              <TextField
                label="Foram com Deus"
                type="number"
                variant="standard"
                value={totalTripulanteFoiComDeus}
                onKeyDown={(event) => event.preventDefault()}
                onChange={(event) => setTotalTripulanteFoiComDeus(event.target.value) }
                inputProps={{ min: 0 }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                sx={{
                  maxWidth: '105px',
                  minWidth: '105px'
                }}
              />
            </div>
          </div>
        </div>
        <DialogActions>
          <Button variant="outlined" startIcon={ <CloseIcon/> } onClick={() => { fecharCadastro(); limpar(); }}>Fechar</Button>
          <Button variant="outlined" startIcon={ <SaveIcon/> } onClick={salvarCadastro} disabled={nome === ""} >Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
