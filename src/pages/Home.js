import React from 'react'; 
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <main style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ color: '#003366' }}>Bem-vindo ao Controle de Estacionamento</h2>
      <div>
        <Link to="/cadastrar" style={linkStyle}>
          <button style={buttonStyle}>Cadastrar Reserva</button>
        </Link>
        <Link to="/listar" style={linkStyle}>
          <button style={buttonStyle}>Listar Vagas</button>
        </Link>
      </div>
    </main>
  );
}

const buttonStyle = {
  padding: '10px 15px',
  margin: '10px',
  backgroundColor: '#3205ac',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const linkStyle = {
  textDecoration: 'none',
};

export default Home;
