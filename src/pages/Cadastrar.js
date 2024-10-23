import React, { useState } from 'react';

function Cadastrar() {
    const [placa, setPlaca] = useState('');
    const [nome, setNome] = useState('');
    const [apartamento, setApartamento] = useState('');
    const [bloco, setBloco] = useState('');
    const [modelo, setModelo] = useState('');
    const [cor, setCor] = useState('');
    const [vaga, setVaga] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const novaVaga = { placa, nome, apartamento, bloco, modelo, cor, vaga };
        adicionarVaga(novaVaga);
        alert('Cadastro realizado com sucesso!');
        setPlaca('');
        setNome('');
        setApartamento('');
        setBloco('');
        setModelo('');
        setCor('');
        setVaga('');
    };

    const adicionarVaga = (vaga) => {
        const vagas = JSON.parse(localStorage.getItem('vagas')) || [];
        vagas.push(vaga);
        localStorage.setItem('vagas', JSON.stringify(vagas));
    };

    return (
        <main>
            <h2>Cadastrar Reserva</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="placa">Placa do veículo</label>
                <input type="text" id="placa" value={placa} onChange={(e) => setPlaca(e.target.value)} required />
                
                <label htmlFor="nome">Nome do proprietário</label>
                <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                
                <label htmlFor="apartamento">Número do apartamento</label>
                <input type="text" id="apartamento" value={apartamento} onChange={(e) => setApartamento(e.target.value)} required />
                
                <label htmlFor="bloco">Bloco do apartamento</label>
                <input type="text" id="bloco" value={bloco} onChange={(e) => setBloco(e.target.value)} required />
                
                <label htmlFor="modelo">Modelo do veículo</label>
                <input type="text" id="modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} required />
                
                <label htmlFor="cor">Cor do veículo</label>
                <input type="text" id="cor" value={cor} onChange={(e) => setCor(e.target.value)} required />
                
                <label htmlFor="vaga">Número da vaga</label>
                <input type="number" id="vaga" value={vaga} onChange={(e) => setVaga(e.target.value)} required />
                
                <button type="submit">Salvar</button>
            </form>
        </main>
    );
}

export default Cadastrar;
