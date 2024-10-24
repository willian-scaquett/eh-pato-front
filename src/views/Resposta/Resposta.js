import { ThumbUp } from "@mui/icons-material";
import { Button, Dialog } from "@mui/material";

export default function Resposta({respostaAberta, fecharResposta, conteudo}) {

    return(
        <Dialog open={respostaAberta} onClose={fecharResposta} PaperProps={{ style: { width: '500px'} }}>
            { conteudo }
            <Button variant="outlined" endIcon={ <ThumbUp/> } onClick={() => fecharResposta()}>
                BELEZA
            </Button>
        </Dialog>
    );
}