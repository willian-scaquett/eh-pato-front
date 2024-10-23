import './ListagemNaves.css';
import { AppBar, Box, Button, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import CadastroNave from '../CadastroNave/CadastroNave';
import { listarTodasNaves } from '../../requests'
import { ptBR } from '@mui/x-data-grid/locales';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { columns, CustomToolbar, paginationModel } from './variaveis'

export default function ListagemNaves() {
  const navigate = useNavigate();

  const [naves, setNaves] = useState([]);
  const [cadastroAberto, setCadastroAberto] = useState(false);

  useEffect(() => carregarNaves(), []);

  const carregarNaves = () => {
    listarTodasNaves().then((response) => {setNaves(response)});
  }

  const abrirCadastro = () => {
    setCadastroAberto(true);
  };

  const fecharCadastro = () => {
    setCadastroAberto(false);
  };

  return (
    <div className="body-tabela">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="toolbar">
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography
              component="div"
              className="typography"
              fontSize={23}
              fontWeight="bold"
            >
              Listagem de Naves 
            </Typography>
            <Button color="inherit" variant="outlined" startIcon={ <AddIcon /> } onClick={abrirCadastro}>
              <b>Cadastrar nave</b>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <CadastroNave cadastroAberto={cadastroAberto} fecharCadastro={fecharCadastro} />

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper sx={{ minHeight: '670px', height: '100%', width: '98%', marginTop: '-3px' }}>
          <DataGrid
            rows={naves}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            sx={{ border: 0 }}
            disableColumnResize
            disableColumnMenu
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            slots={{ toolbar: CustomToolbar }}
          />
        </Paper>
      </Box>
      <div className="legenda">B/F/FCD = Bem/Ferido/Foi Com Deus</div>
    </div>
  );
}
