import alunosData from '../../data/alunos'

const listaAlunos = () => {
    return (<div>
        <ul style={{ listStyle: 'none' }}>
            {alunosData.map((aluno) => <li key={aluno.id}>{aluno.id}) {aluno.nome} - {aluno.nota} </li>)}
        </ul>
    </div>)
}

export default listaAlunos;