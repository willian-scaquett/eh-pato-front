import { Button, Dialog, DialogActions, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './CadastroNave.css';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { buscarValoresSelectsCadastro } from '../../requests';

export default function CadastroNave({cadastroAberto, fecharCadastro}) {
  const [cor, setCor] = useState('');
  const [localQueda, setLocalQueda] = useState('');
  const [tipoCombustivel, setTipoCombustivel] = useState('');
  const [grauAvaria, setGrauAvaria] = useState('');
  const [potencialTecnologico, setPotencialTecnologico] = useState('');
  const [armamento, setArmamento] = useState('');
  
  const [listas, setListas] = useState([]);

  const buscarValoresListas = () => {
    buscarValoresSelectsCadastro().then((response) => setListas(response));
  }

  useEffect(() => buscarValoresListas(), []);

  return (
      <Dialog
        open={cadastroAberto}
        onClose={fecharCadastro}
        PaperProps={{
          style: { width: '600px'}
        }}
      >
        <div className="formulario">
          <h2>Formulário de cadastro</h2>
          <div className="linha">
            <div className="campo"><TextField label="Nome" variant="standard"/></div>
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, maxWidth: 220 }} fullWidth>
                <InputLabel>Cor</InputLabel>
                <Select
                  value={cor}
                  onChange={(event) => setCor(event.target.value)}
                >
                  {listas.cores && listas.cores.map((cor) => (<MenuItem value={cor.value}>{cor.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="linha">
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, maxWidth: 220 }} fullWidth>
                <InputLabel>Local da Queda</InputLabel>
                <Select
                  value={localQueda}
                  onChange={(event) => setLocalQueda(event.target.value)}
                >
                  {listas.locais && listas.locais.map((local) => (<MenuItem value={local.value}>{local.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, maxWidth: 220 }} fullWidth>
                <InputLabel>Armamento</InputLabel>
                <Select
                  value={armamento}
                  onChange={(event) => setArmamento(event.target.value)}
                >
                  {listas.armamentos && listas.armamentos.map((arma) => (<MenuItem value={arma.value}>{arma.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="linha">
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, maxWidth: 220 }} fullWidth>
                <InputLabel>Tipo de Combustível</InputLabel>
                <Select
                  value={tipoCombustivel}
                  onChange={(event) => setTipoCombustivel(event.target.value)}
                >
                  {listas.combustiveis && listas.combustiveis.map((combustivel) => (<MenuItem value={combustivel.value}>{combustivel.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
            <div className="campo"><TextField label="Tripulantes" variant="standard"/></div>
          </div>
          <div className="linha">
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, maxWidth: 220 }} fullWidth>
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
              <FormControl variant="standard" sx={{ m: 1, maxWidth: 220 }} fullWidth>
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
        </div>
        <DialogActions>
          <Button variant="outlined" startIcon={ <CloseIcon/> } onClick={fecharCadastro}>Fechar</Button>
          <Button variant="outlined" startIcon={ <SaveIcon/> } onClick={fecharCadastro}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
