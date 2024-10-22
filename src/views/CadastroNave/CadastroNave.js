import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './CadastroNave.css';
import { useState } from 'react';

export default function CadastroNave() {
  const [cor, setCor] = useState('');
  const [localQueda, setLocalQueda] = useState('');
  const [tipoCombustivel, setTipoCombustivel] = useState('');
  const [grauAvaria, setGrauAvaria] = useState('');
  const [potencialTecnologico, setPotencialTecnologico] = useState('');

  const cores = [
    {value: "VERMELHA", nome: "Vermelha"},
    {value: "LARANJA", nome: "Laranja"},
    {value: "AMARELA", nome: "Amarela"},
    {value: "VERDE", nome: "Verde"},
    {value: "AZUL", nome: "Azul"},
    {value: "ANIL", nome: "Anil"},
    {value: "VIOLETA", nome: "Violeta"},
    {value: "COR_DESCONHECIDA", nome: "Cor desconhecida"},
  ]

  const locais = [
    {value: "OCEANO", nome: "Oceano"},
    {value: "CONTINENTE", nome: "Continente"},
    {value: "SO_DEUS_SABE", nome: "Só Deus Sabe"},
  ]

  const combustiveis = [
    {value: "PLASMA_DE_PLUTONIO", nome: "Plasma de Plutônio"},
    {value: "GOTAS_DE_MATERIA_ESCURA", nome: "Gotas de Matéria Escura"},
    {value: "LAGRIMAS_DE_UNICORNIO", nome: "Lágrimas de Unicórnio"},
    {value: "ESPRESSO_QUANTICO", nome: "Espresso Quântico"},
    {value: "FALHA_GRAVITACIONAL", nome: "Falha Gravitacional"},
    {value: "PARTICULAS_VIRTUAIS", nome: "Partículas Virtuais"},
    {value: "COMBUSTIVEL_DESCONHECIDO", nome: "Combustivel desconhecido"},
  ]

  const graus = [
    {value: "SEM_AVARIAS", nome: "Sem Avarias"},
    {value: "PRATICAMENTE_INTACTA", nome: "Praticamente Intacta"},
    {value: "PARCIALMENTE_DESTRUIDA", nome: "Parcialmente Destruída"},
    {value: "MUITO_DESTRUIDA", nome: "Muito Destruída"},
    {value: "PERDA_TOTAL", nome: "Perda Total"},    
  ]
 
  const potenciais = [
    {value: "PRIMITIVA", nome: "Primitiva"},
    {value: "AVANCADA", nome: "Avançada"},
    {value: "SOBERANA", nome: "Soberana"},
    {value: "DIVINA", nome: "Divina"},
    {value: "TRANSCENDENTE", nome: "Transcendente"},    
  ]
 
  return (
      <div >
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
                  {cores.map((cor) => (<MenuItem value={cor.value}>{cor.nome}</MenuItem>))}
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
                  {locais.map((local) => (<MenuItem value={local.value}>{local.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
            <div className="campo"><TextField label="Armamento" variant="standard"/></div>
          </div>
          <div className="linha">
            <div className="campo">
              <FormControl variant="standard" sx={{ m: 1, maxWidth: 220 }} fullWidth>
                <InputLabel>Tipo de Combustível</InputLabel>
                <Select
                  value={tipoCombustivel}
                  onChange={(event) => setTipoCombustivel(event.target.value)}
                >
                  {combustiveis.map((combustivel) => (<MenuItem value={combustivel.value}>{combustivel.nome}</MenuItem>))}
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
                  {graus.map((grau) => (<MenuItem value={grau.value}>{grau.nome}</MenuItem>))}
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
                  {potenciais.map((potencial) => (<MenuItem value={potencial.value}>{potencial.nome}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
    </div>
  );
}
