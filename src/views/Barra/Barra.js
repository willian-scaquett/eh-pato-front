import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export default function Barra({titulo}) {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar style={{backgroundColor: "#3CB371", color: "#282c34"}}>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => navigate('/')}
                >
                <ArrowBackIcon />
                </IconButton>
                <h2>{titulo}</h2>
            </Toolbar>
            </AppBar>
        </Box>
    );
}