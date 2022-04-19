import './Contador.css';
import { Component } from "react";
import Display from './Display'
import Botoes from './Botoes';
import PassoForm from './PassoForm';

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

    setNumero = () => {
        this.setState({
            numero: 0
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.incrementar} setDec={this.decrementar} setNumero={this.setNumero} />
            </div>
        )
    }
}

export default Contador;