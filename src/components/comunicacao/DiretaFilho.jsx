const DiretaFilho = props => {
    return (
        <div style={{ backgroundColor: "blueviolet", margin: '10px' }}>
            <span>{props.texto} </span>
            <span><strong>{props.numero}</strong> </span>
            <div>{props.nerd ? 'Verdadeiro' : 'False'}!</div>
        </div>
    )
}

export default DiretaFilho;