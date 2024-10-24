import './ListagemNaves.css';
import { AppBar, Box, Button, Dialog, DialogActions, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import CadastroNave from '../CadastroNave/CadastroNave';
import { apagarNave, buscarNavePorId, listarTodasNaves } from '../../requests'
import { ptBR } from '@mui/x-data-grid/locales';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material';

export default function ListagemNaves() {
  const navigate = useNavigate();

  const [naves, setNaves] = useState([]);
  const [cadastroAberto, setCadastroAberto] = useState(false);
  const [verificacaoApagarAberto, setVerificacaoApagarAberto] = useState(false);
  const [naveApagar, setNaveApagar] = useState({});
  const [naveEditar, setNaveEditar] = useState(null);

  //Ao montar o componente, busca as naves da API
  useEffect(() => carregarNaves(), []);

  //Busca as naves da API
  const carregarNaves = () => {
    listarTodasNaves().then((response) => {setNaves(response)});
  }

  //Abre o dialog de cadastro
  const abrirCadastro = () => {
    setCadastroAberto(true);
  };

  //Fecha o dialog de cadastro e limpa o naveEditar
  const fecharCadastro = () => {
    setNaveEditar(null);
    setCadastroAberto(false);
  };

  //Seta o naveApagar e abre o dialog de confirmação do apagar
  const abrirVerificacaoApagar = (nave) => {
    setNaveApagar(nave);
    setVerificacaoApagarAberto(true);
  };

  //Fecha a verificação de apagar
  const fecharVerificacaoApagar = () => {
    setVerificacaoApagarAberto(false);
  };

  //Apaga a nave e, após resposta da API, fecha a verificação de apagar e recarrega as naves da tabela
  const confirmarApagarNave = () => {
    apagarNave(naveApagar.id).then(() => {
      carregarNaves();
      fecharVerificacaoApagar();
    });
  }

  //Busca os dados da nave a editar na API, seta no naveEditar e abre o formulário
  const abrirEdicaoNave = (id) => {
    buscarNavePorId(id)
    .then((response) => {
      setNaveEditar(response);
      abrirCadastro();
    });
  }

  //Define as colunas da tabela de listagem das naves
  const columns = [
    { field: 'nome', headerName: 'Nome', width: 180, align: 'center ', headerAlign: 'center' },
    { field: 'cor', headerName: 'Cor', width: 90, align: 'center ', headerAlign: 'center' },
    { field: 'tamanho', headerName: 'Tamanho', width: 90, align: 'center ', headerAlign: 'center' },
    { field: 'localQueda', headerName: 'Local da Queda', width: 170, align: 'center ', headerAlign: 'center' },
    { field: 'armamento', headerName: 'Armamento', width: 140, align: 'center ', headerAlign: 'center' },
    { field: 'tipoCombustivel', headerName: 'Tipo de Combustível', width: 190, align: 'center ', headerAlign: 'center' },
    { field: 'tripulantes', headerName: 'Tripulantes(B/F/FCD)', width: 200, align: 'center ', headerAlign: 'center' },
    { field: 'grauAvaria', headerName: 'Grau de Avaria', width: 180, align: 'center ', headerAlign: 'center' },
    { field: 'potencialTecnologico', headerName: 'Potencial Tecnológico', width: 200, align: 'center ', headerAlign: 'center' },
    { field: 'periculosidade', headerName: 'Periculosidade', width: 140, align: 'center ', headerAlign: 'center' },
    { field: 'classificacao', headerName: 'Classificação', width: 200, align: 'center ', headerAlign: 'center' },
    { 
        field: 'acoes',
        headerName: 'Ações',
        width: 100,
        align: 'center ',
        headerAlign: 'center',
        sortable: false,
        renderCell: (params) => (
            <>
                <IconButton onClick={(() => abrirEdicaoNave(params.row.id))}>
                  <EditOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={() => abrirVerificacaoApagar(params.row)}>
                  <DeleteOutlinedIcon fontSize="small" />
                </IconButton>
            </>
        )
    },
  ]

  const paginationModel = { page: 0, pageSize: 10 }

  const CustomToolbar = () => {
    return (
        <GridToolbarContainer>
            <GridToolbarQuickFilter sx={{ margin: "10px", width: "100%" }} />
        </GridToolbarContainer>
    );
  }

  return (
    <div className="body-tabela">
      <Dialog open={verificacaoApagarAberto} onClose={fecharVerificacaoApagar} PaperProps={{ style: { width: '400px'} }}>
        <p>Realmente deseja apagar <b>{naveApagar.nome}</b>?</p>
        <DialogActions>
          <Button
            variant="outlined"
            startIcon={ <ThumbDownOutlined  /> }
            onClick={() => {fecharVerificacaoApagar()}}
          >
            Não
          </Button>
          <Button
            variant="outlined"
            startIcon={ <ThumbUpOutlined/> }
            onClick={() => {confirmarApagarNave()}}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
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

      <CadastroNave
        carregarNaves={carregarNaves}
        cadastroAberto={cadastroAberto}
        fecharCadastro={fecharCadastro}
        naveEditar={naveEditar}
      />

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper sx={{ minHeight: '690px', height: '100%', width: '98%', marginTop: '-3px' }}>
          <DataGrid
            rows={naves}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            sx={{ border: 0 }}
            disableColumnResize
            disableColumnMenu
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            slots={{ toolbar: CustomToolbar }}
            hideFooterSelectedRowCount
          />
        </Paper>
      </Box>
      <div className="legenda">B/F/FCD = Bem/Ferido/Foi Com Deus</div>
    </div>
  );
}
