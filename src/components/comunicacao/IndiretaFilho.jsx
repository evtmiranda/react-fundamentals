const IndiretaFilho = props => {
    const min = 30
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min);
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={() => props.quandoClicar('João', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div >
    )
}

export default IndiretaFilho;