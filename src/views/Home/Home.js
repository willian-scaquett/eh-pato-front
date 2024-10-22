import pato from '../../images/pato.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import EhPato from '../EhPato/EhPato';

function Home() {
  const navigate = useNavigate();

  const [ehPatoAberto, setEhPatoAberto] = useState(false);

  const abrirEhPato = () => {
      setEhPatoAberto(true);
  };

  const fecharEhPato = () => {
      setEhPatoAberto(false);
  };

  return (
    <div>
      <EhPato fecharEhPato={ fecharEhPato } ehPatoAberto={ ehPatoAberto } />
      <div className="body">
        <div class="bem-vindo">Bem-vindo ao melhor (ou não) sistema para o seu fim de mundo!</div>
        <div class="polaroid">
          <img src={pato} alt="pato" />
        </div>
        <div class="pergunta">O que deseja fazer?</div>
        <div onClick={() => navigate('/listagem-naves')} class="opcoes">Conferir naves</div>
        <div onClick={() => abrirEhPato()} class="opcoes">EH PATO?</div>
      </div>
    </div>
  );
}

export default Home;