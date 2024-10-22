import { Button, Dialog, DialogActions, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './EhPato.css';
import { useState } from 'react';
import { GridCloseIcon } from '@mui/x-data-grid';
import { verificarEhPato } from '../../requests';
import { ThumbUp } from '@mui/icons-material';

export default function EhPato({ fecharEhPato, ehPatoAberto }) {
  const [enverdeamento, setEsverdeamento] = useState(0);
  const [tamanhoBico, setTamanhoBico] = useState(1);
  const [grauSotaque, setGrauSotaque] = useState(0);
  const [recordeDiasSemComer, setRecordeDiasSemComer] = useState(0);
  const [temSmartphone, setTemSmartphone] = useState(true);
  const [gostaLagos, setGostaLagos] = useState(true);
  const [cursaTI, setCursaTI] = useState(true);
  const [comePao, setComePao] = useState(true);
  const [timeCoracao, setTimeCoracao] = useState("Atlético Pateiro")
  const [localizacao, setLocalizacao] = useState("AGUA")
  const [emBando, setEmBando] = useState(false)
  const [ehPato, setEhPato] = useState(false);
  const [armaRecomendada, setArmaRecomendada] = useState("");
  const [respostaAberta, setRespostaAberta] = useState(false);

  const limpar = () => {
    setEsverdeamento(0);
    setTamanhoBico(1);
    setGrauSotaque(0);
    setRecordeDiasSemComer(0);
    setTemSmartphone(true);
    setGostaLagos(true);
    setCursaTI(true);
    setComePao(true);
    setTimeCoracao("Atlético Pateiro")
    setLocalizacao("AGUA")
    setEmBando(false)
    setEhPato(false);
    setArmaRecomendada("");
    setRespostaAberta(false);
  }

  const verificar = () => {
    verificarEhPato({
      esverdeamento: enverdeamento,
      tamanhoBico: tamanhoBico,
      grauSotaque: grauSotaque,
      recordeDiasSemComer: recordeDiasSemComer,
      temSmartphone: temSmartphone,
      gostaDeLagos: gostaLagos,
      comeOPaoDadoPelosVelhinhosNoParque: comePao,
      cursaTI: cursaTI,
      timeDoCoracao: timeCoracao,
      localizacaoSuspeito: localizacao,
      emBando: emBando,
    }).then((response) => {
      console.log(response  );
      setEhPato(response.ehPato);
      setArmaRecomendada(response.armaRecomendada);
    }).finally(() => abrirResposta());
  }

  const abrirResposta = () => {
    setRespostaAberta(true);
  };

  const fecharResposta = () => {
    setRespostaAberta(false);
  };

  const respostas = [
    {value: true, nome: "Sim"},
    {value: false, nome: "Não"}
  ]

  const times = [
    {value: "Atlético Pateiro", nome: "Atlético Pateiro"},
    {value: "Atlético Patoniense", nome: "Atlético Patoniense"},
    {value: "Athletico Patonaense", nome: "Athletico Patonaense"},
    {value: "Cruzeiduck", nome: "Cruzeiduck"},
    {value: "Flumipato", nome: "Flumipato"},
    {value: "Interpatonal", nome: "Interpatonal"},
    {value: "Pato da Gama", nome: "Pato da Gama"},
    {value: "Patoiabá", nome: "Patoiabá"},
    {value: "Patofogo", nome: "Patofogo"},
    {value: "Patoleza", nome: "Patoleza"},
    {value: "Patomengo", nome: "Patomengo"},
    {value: "Patoninthians", nome: "Patoninthians"},
    {value: "Patohia", nome: "Patohia"},
    {value: "Patória", nome: "Patória"},
    {value: "Patomeiras", nome: "Patomeiras"},
    {value: "Patotino", nome: "Patotino"},
    {value: "Patotude", nome: "Patotude"},
    {value: "Quackriciúma", nome: "Quackriciúma"},
    {value: "Quackrêmio", nome: "Quackrêmio"},
    {value: "São Pato", nome: "São Pato"},
  ]

  const localizacoes = [
    {value: "AGUA", nome: "Água"},
    {value: "TERRA", nome: "Terra"},
    {value: "AR", nome: "Ar"}
  ]

  const quantidades = [
    {value: false, nome: "Sozinho"},
    {value: true, nome: "Bando"}
  ]

  return (
    <Dialog
      open={ehPatoAberto}
      onClose={fecharEhPato}
      PaperProps={{ style: { width: '600px'} }}
    >
      <Dialog open={respostaAberta} onClose={fecharResposta} PaperProps={{ style: { width: '500px'} }}>
        {ehPato && <p><b>EH PATO!</b><br/> Não machuca ele não =(</p> }
        {!ehPato && <p><b>CUIDADO!</b><br/> Você está na presença de xenófago(s). <br/><br/> <b>Arma recomendada:</b> {armaRecomendada}</p> }
        <p><b>Lembre-se:</b> Nossa IA ainda está aprendendo sobre esses invasores, então tenha cautela para não se machucar ou machucar possíveis patos</p>
        <Button
          variant="outlined"
          endIcon={ <ThumbUp/> }
          onClick={() => {
            fecharEhPato();
            fecharResposta();
            limpar();
          }}
        >
          BELEZA
        </Button>
      </Dialog>

      <div className="formulario">
        <h2>EH PATO?!?!</h2>
        <p>
          Caso algum de nossos agentes se comunique alertando que seu visor está com problemas de conexão,
          use o formulário abaixo para verificar os padrões observados do possível alien.
        </p>
        <p style={{fontSize: 10}}>
          Confira o manual do operador para entender as escalas de 'Esverdeamento' e 'Grau de Sotaque'
        </p>
        <div className="linha">
          <div className="campo">
          <TextField
            label="Everdeamento"
            type="number"
            variant="standard"
            value={enverdeamento}
            onKeyDown={(event) => event.preventDefault()}
            onChange={(event) => setEsverdeamento(event.target.value) }
            inputProps={{ min: 0, max: 10 }}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{
              minWidth: '130px',
            }}
          />
          </div>
          <div className="campo">
            <TextField
              label="Grau do sotaque"
              type="number"
              variant="standard"
              value={grauSotaque}
              onKeyDown={(event) => event.preventDefault()}
              onChange={(event) => setGrauSotaque(event.target.value) }
              inputProps={{ min: 0, max: 10 }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              sx={{
                minWidth: '130px',
              }}
            />
          </div>
          <div className="campo">
            <TextField
              label="Tamanho do bico (cm)"
              type="number"
              variant="standard"
              value={tamanhoBico}
              onKeyDown={(event) => event.preventDefault()}
              onChange={(event) => setTamanhoBico(event.target.value) }
              inputProps={{ min: 1 }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              sx={{
                minWidth: '150px',
              }}
            />
          </div>
        </div>
        <div className="linha">
          <div className="campo">
            <TextField
              label="Recorde de dias sem comer"
              type="number"
              variant="standard"
              value={recordeDiasSemComer}
              onKeyDown={(event) => event.preventDefault()}
              onChange={(event) => setRecordeDiasSemComer(event.target.value) }
              inputProps={{ min: 0 }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              sx={{
                minWidth: '230px',
              }}
            />
          </div>
          <div className="campo">
            <FormControl variant="standard" sx={{ m: 1, maxWidth: 230 }} fullWidth>
              <InputLabel>Tem smartphone?</InputLabel>
              <Select
                value={temSmartphone}
                onChange={(event) => setTemSmartphone(event.target.value)}
              >
                {respostas.map((resposta) => (<MenuItem value={resposta.value}>{resposta.nome}</MenuItem>))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="linha">
          <div className="campo">
            <FormControl variant="standard" sx={{ m: 1, maxWidth: 230 }} fullWidth>
                <InputLabel>Gosta de lagos?</InputLabel>
                <Select
                  value={gostaLagos}
                  onChange={(event) => setGostaLagos(event.target.value)}
                >
                  {respostas.map((resposta) => (<MenuItem value={resposta.value}>{resposta.nome}</MenuItem>))}
                </Select>
              </FormControl>
          </div>
          <div className="campo">
            <FormControl variant="standard" sx={{ m: 1, maxWidth: 230 }} fullWidth>
                <InputLabel>Cursa TI?</InputLabel>
                <Select
                  value={cursaTI}
                  onChange={(event) => setCursaTI(event.target.value)}
                >
                  {respostas.map((resposta) => (<MenuItem value={resposta.value}>{resposta.nome}</MenuItem>))}
                </Select>
              </FormControl>
          </div>
        </div>
        <div className="linha">
          <div className="campo">
            <FormControl variant="standard" sx={{ m: 1, maxWidth: 600 }} fullWidth>
                <InputLabel>Come o pão dado pelos velhinhos no parque?</InputLabel>
                <Select
                  value={comePao}
                  onChange={(event) => setComePao(event.target.value)}
                >
                  {respostas.map((resposta) => (<MenuItem value={resposta.value}>{resposta.nome}</MenuItem>))}
                </Select>
              </FormControl>
          </div>
        </div>
        <div className="linha">
          <div className="campo">
            <FormControl variant="standard" sx={{ m: 1, maxWidth: 600 }} fullWidth>
                <InputLabel>Time do coração</InputLabel>
                <Select
                  value={timeCoracao}
                  onChange={(event) => setTimeCoracao(event.target.value)}
                >
                  {times.map((time) => (<MenuItem value={time.value}>{time.nome}</MenuItem>))}
                </Select>
              </FormControl>
          </div>
        </div>
        <div className="linha">
          <div className="campo">
            <FormControl variant="standard" sx={{ m: 1, maxWidth: 600 }} fullWidth>
                <InputLabel>Onde ele se encontra?</InputLabel>
                <Select
                  value={localizacao}
                  onChange={(event) => setLocalizacao(event.target.value)}
                >
                  {localizacoes.map((local) => (<MenuItem value={local.value}>{local.nome}</MenuItem>))}
                </Select>
              </FormControl>
          </div>
          <div className="campo">
            <FormControl variant="standard" sx={{ m: 1, maxWidth: 600 }} fullWidth>
                <InputLabel>Está sozinho ou em bando?</InputLabel>
                <Select
                  value={emBando}
                  onChange={(event) => setEmBando(event.target.value)}
                >
                  {quantidades.map((qtde) => (<MenuItem value={qtde.value}>{qtde.nome}</MenuItem>))}
                </Select>
              </FormControl>
          </div>
        </div>
      </div>
      <DialogActions>
        <Button variant="outlined" startIcon={ <GridCloseIcon/> } onClick={fecharEhPato}>Fechar</Button>
        <Button
          variant="outlined"
          onClick={() => verificar()}
          startIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.5 5A1.5 1.5 0 0 0 7 6.5A1.5 1.5 0 0 0 8.5 8A1.5 1.5 0 0 0 10 6.5A1.5 1.5 0 0 0 8.5 5M10 2a5 5 0 0 1 5 5c0 1.7-.85 3.2-2.14 4.1c1.58.15 3.36.51 5.14 1.4c3 1.5 4-.5 4-.5s-1 9-7 9H9s-5 0-5-5c0-3 3-4 2-6c-4 0-4-3.5-4-3.5c1 .5 2.24.5 3 .15A5.02 5.02 0 0 1 10 2" />
            </svg>
          }
        >
          VERIFICAR!
        </Button>
      </DialogActions>
    </Dialog>
  );
}