import './Mega.css'

import { useState } from "react";
import { gerarNumeros } from './gerarNumeros'

const Mega = props => {
    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosIniciais = gerarNumeros(qtde);
    const [numerosMega, setNumerosMega] = useState(numerosIniciais);

    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <div className="NumerosMega">{numerosMega.map((numero) => <span>{numero}</span>)}</div>
            <div>
                <label htmlFor="qtdNumeros">Qtde de Números</label>
                <input
                    id="qtdNumeros"
                    type="number"
                    value={qtde}
                    min="6"
                    max="15"
                    onChange={e => {
                        setQtde(+e.target.value)
                        setNumerosMega(gerarNumeros(+e.target.value))
                    }} />
            </div>
            <button onClick={() => setNumerosMega(gerarNumeros(qtde))}>Surpresinha</button>
        </div>
    )
}

export default Mega;