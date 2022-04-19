import { useState } from "react";
import './Input.css'

const Input = () => {
    const [valor, setValor] = useState('Inicial')

    const quandoMudar = (e) => {
        setValor(e.target.value)
    }


    return (
        <div>
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* controlled component */}
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />

                {/* uncontrolled component */}
                <input value={undefined} />
            </div>
        </div>
    )
}

export default Input;