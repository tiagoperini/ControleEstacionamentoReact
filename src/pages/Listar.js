import React from 'react';

const Listar = () => {
    const vagas = JSON.parse(localStorage.getItem('vagas')) || [];

    const excluirVaga = (index) => {
        vagas.splice(index, 1);
        localStorage.setItem('vagas', JSON.stringify(vagas));
        window.location.reload();
    };

    return (
        <main>
            <table id="lista-vagas">
                <thead>
                    <tr>
                        <th>Placa</th>
                        <th>Proprietário</th>
                        <th>Apartamento</th>
                        <th>Bloco</th>
                        <th>Modelo</th>
                        <th>Cor</th>
                        <th>Vaga</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {vagas.length === 0 ? (
                        <tr>
                            <td colSpan="8">Nenhuma vaga cadastrada.</td>
                        </tr>
                    ) : (
                        vagas.map((vaga, index) => (
                            <tr key={index}>
                                <td>{vaga.placa}</td>
                                <td>{vaga.nome}</td>
                                <td>{vaga.apartamento}</td>
                                <td>{vaga.bloco}</td>
                                <td>{vaga.modelo}</td>
                                <td>{vaga.cor}</td>
                                <td>{vaga.vaga}</td>
                                <td>
                                    <button onClick={() => excluirVaga(index)}>Excluir</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </main>
    );
};

export default Listar;
