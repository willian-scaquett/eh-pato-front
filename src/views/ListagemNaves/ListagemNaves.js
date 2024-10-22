import './ListagemNaves.css';
import Barra from '../Barra/Barra';
import { Button, Dialog, DialogActions, IconButton } from '@mui/material';
import { GridAddIcon } from '@mui/x-data-grid';
import { useState } from 'react';
import CadastroNave from '../CadastroNave/CadastroNave';

function createData(id, nome, cor, localQueda, armamentos, tipoCombustivel, tripulantes, grauAvaria, potencialTecnologico) {
  return { id, nome, cor, localQueda, armamentos, tipoCombustivel, tripulantes, grauAvaria, potencialTecnologico };
}

const rows = [
  createData(123, "Nave 1", "Amarelo", "Floresta", "AK-47", "Gasolina", "1/2/3", "Perda Total", 1),
  createData(456, "Nave 2", "Branco", "Rio", "Faquinha", "Etanol", "4/5/6", "Muito Destruída ", 6),
  createData(789, "Nave 3", "Castanho", "Mar", "Pistola", "Diesel", "7/8/9", "Parcialmente Destruída", 6),
  createData(101, "Nave 4", "Dourado", "Cidade", "M16", "Solar", "10/11/12", "Praticamente Intacta", 4),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
  createData(112, "Nave 5", "Esmeralda", "Praia", "Laser", "Nuclear", "13/14/15 ", "Sem avarias", 0),
];

export default function ListagemNaves() {
  const [cadastroAberto, setCadastroAberto] = useState(false);

  const abrirCadastro = () => {
    setCadastroAberto(true);
  };

  const fecharCadastro = () => {
    setCadastroAberto(false);
  };

  return (
    <div className="body-tabela">
      <Barra titulo="Listagem de Naves" />
      <div style={{padding: "10px 50px"}}>
        <div className="botaoAdicionar">
          <IconButton aria-label="delete" size="large" onClick={abrirCadastro}>
            <GridAddIcon style={{color: "#282c34"}} />
          </IconButton>
        </div>
        <Dialog
          open={cadastroAberto}
          onClose={fecharCadastro}
          PaperProps={{
            style: { width: '600px'},
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              fecharCadastro();
            },
          }}
        >
          <CadastroNave/>
          <DialogActions>
            <Button onClick={fecharCadastro}>Cancel</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </Dialog>
        <table border="0" cellpadding="10" cellspacing="0" width="100%">
          <thead>
            <tr>
              <th align="center">ID</th>
              <th align="center">Nome</th>
              <th align="center">Cor</th>
              <th align="center">Local da Queda</th>
              <th align="center">Armamentos</th>
              <th align="center">Tipo de Combustível</th>
              <th align="center">Tripulantes</th>
              <th align="center">Grau de Avaria</th>
              <th align="center">Potencial Tecnológico</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td align="center">{row.id}</td>
                <td align="center">{row.nome}</td>
                <td align="center">{row.cor}</td>
                <td align="center">{row.localQueda}</td>
                <td align="center">{row.armamentos}</td>
                <td align="center">{row.tipoCombustivel}</td>
                <td align="center">{row.tripulantes}</td>
                <td align="center">{row.grauAvaria}</td>
                <td align="center">{row.potencialTecnologico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
