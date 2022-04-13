import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

const app = () => (
    <div id='app'>
        <h1>Fundamentos React (Arrow)</h1>
        <Aleatorio min={1} max={60} />
        <Primeiro />
        <ComParametro titulo='Segundo componente' aluno='Everton' nota={6.6} />
        <ComParametro titulo='Segundo componente' aluno='Mariana' nota={9.1} />
        <ComParametro titulo='Segundo componente' aluno='Gabriela' nota={9.3} />
        <Fragmento />
    </div>
)

export default app;