import './Botoes.css'

const Botoes = props => {
    return (
        <>
            <div className="IncrementarDecrementar">
                <button onClick={props.setInc}>+</button>
                <button onClick={props.setDec}>-</button>
            </div>
            <div className="Zerar">
                <button onClick={props.setNumero}>ZERAR</button>
            </div>
        </>
    )
}

export default Botoes;