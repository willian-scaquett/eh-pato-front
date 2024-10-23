import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";

export const columns = [
    { field: 'nome', headerName: 'Nome', width: 180, align: 'center ', headerAlign: 'center' },
    { field: 'cor', headerName: 'Cor', width: 90, align: 'center ', headerAlign: 'center' },
    { field: 'tamanho', headerName: 'Tamanho', width: 90, align: 'center ', headerAlign: 'center' },
    { field: 'localQueda', headerName: 'Local da Queda', width: 225, align: 'center ', headerAlign: 'center' },
    { field: 'armamento', headerName: 'Armamento', width: 140, align: 'center ', headerAlign: 'center' },
    { field: 'tipoCombustivel', headerName: 'Tipo de Combustível', width: 200, align: 'center ', headerAlign: 'center' },
    { field: 'tripulantes', headerName: 'Tripulantes(B/F/FCD)', width: 200, align: 'center ', headerAlign: 'center' },
    { field: 'grauAvaria', headerName: 'Grau de Avaria', width: 210, align: 'center ', headerAlign: 'center' },
    { field: 'potencialTecnologico', headerName: 'Potencial Tecnológico', width: 200, align: 'center ', headerAlign: 'center' },
    { field: 'periculosidade', headerName: 'Periculosidade', width: 140, align: 'center ', headerAlign: 'center' },
    { field: 'classificacao', headerName: 'Classificação', width: 140, align: 'center ', headerAlign: 'center' },
    { field: 'a', headerName: '', width: 50, align: 'center ', headerAlign: 'center' },
]

export const paginationModel = { page: 0, pageSize: 10 }

export function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarQuickFilter sx={{ margin: "10px", width: "100%" }} />
        </GridToolbarContainer>
    );
}
