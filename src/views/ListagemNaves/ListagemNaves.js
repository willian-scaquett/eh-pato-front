import './ListagemNaves.css';
import { AppBar, Box, Button, Dialog, DialogActions, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import CadastroNave from '../CadastroNave/CadastroNave';
import { listarTodasNaves } from '../../requests'
import { ptBR } from '@mui/x-data-grid/locales';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

export default function ListagemNaves() {
  const [naves, setNaves] = useState([]);
  const [cadastroAberto, setCadastroAberto] = useState(false);
  const navigate = useNavigate();

  const abrirCadastro = () => {
    setCadastroAberto(true);
  };

  const fecharCadastro = () => {
    setCadastroAberto(false);
  };

  const carregarNaves = () => {
    listarTodasNaves().then((response) => {setNaves(response)});
  }

  useEffect(() => carregarNaves(), []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, align: 'center ', headerAlign: 'center' },
    { field: 'nome', headerName: 'Nome', width: 200, align: 'center ', headerAlign: 'center' },
    { field: 'cor', headerName: 'Cor', width: 180, align: 'center ', headerAlign: 'center' },
    { field: 'localQueda', headerName: 'Local da Queda', width: 150, align: 'center ', headerAlign: 'center' },
    { field: 'armamento', headerName: 'Armamento', width: 200, align: 'center ', headerAlign: 'center' },
    { field: 'tipoCombustivel', headerName: 'Tipo de Combustível', width: 200, align: 'center ', headerAlign: 'center' },
    { field: 'tripulantes', headerName: 'Tripulantes (B/F/FCD)', width: 200, align: 'center ', headerAlign: 'center' },
    { field: 'grauAvaria', headerName: 'Grau de Avaria', width: 220, align: 'center ', headerAlign: 'center' },
    { field: 'potencialTecnologico', headerName: 'Potencial Tecnológico', width: 200, align: 'center ', headerAlign: 'center' },
    { field: 'classificacao', headerName: 'Classificação', width: 200, align: 'center ', headerAlign: 'center' },
  ]

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarQuickFilter sx={{ margin: "10px", width: "100%" }} />
      </GridToolbarContainer>
    );
  }

  const paginationModel = { page: 0, pageSize: 10 };

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
      <Dialog
        open={cadastroAberto}
        onClose={fecharCadastro}
        PaperProps={{
          style: { width: '600px'}
        }}
      >
        <CadastroNave/>
        <DialogActions>
          <Button onClick={fecharCadastro}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
      
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
    </div>
  );
}
