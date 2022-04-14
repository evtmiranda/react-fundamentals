import './App.css'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

const app = () => (
    <div className='App' >
        <h1>Fundamentos React (Arrow)</h1>
        <div className='Cards'>
            <Card titulo="Número Aleatório" color="#001E6C">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="Fragmento" color="#E8630A">
                <Fragmento />
            </Card>

            <Card titulo="Com Parâmetro" color="#035397">
                <ComParametro titulo='Segundo componente' aluno='Mariana' nota={9.1} />
            </Card>

            <Card titulo="Primeiro" color="#FCD900">
                <Primeiro />
            </Card>
        </div>
    </div >
)

export default app;