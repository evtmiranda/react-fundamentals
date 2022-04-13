export default function ComParametro(props) {
    const notaArredondada = Math.ceil(props.nota)
    const status = notaArredondada >= 7 ? 'aprovado(a)' : 'em recuperação'

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno}</strong> tem nota <strong>{notaArredondada} e está {status}</strong></p>
        </div>
    )
}