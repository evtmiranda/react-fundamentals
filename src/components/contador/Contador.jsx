import './Contador.css';
import { Component } from "react";
import Display from './Display'
import Botoes from './Botoes';

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero < 1 ? this.state.numero : this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <Botoes incrementar={this.incrementar} decrementar={this.decrementar} />
            </div>
        )
    }
}

export default Contador;