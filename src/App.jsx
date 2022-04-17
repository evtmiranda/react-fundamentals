import './App.css'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProduto from './components/repeticao/TabelaProduto'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

const app = () => (
    <div className='App' >
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#08 - Par ou Impar" color="#513C59">
                <ParOuImpar numero={6} />
                <UsuarioInfo usuario={{ nome: 'Mariana' }} />
                <UsuarioInfo usuario={{ email: 'mari@ana.com' }} />
            </Card>
            <Card titulo="#07 - Produtos">
                <TabelaProduto />
            </Card>
            <Card titulo="#06 - Repetição">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 - Componente com filhos" color="#021C00">
                <Familia sobrenome="Oliveira">
                    <FamiliaMembro nome="Everton" />
                    <FamiliaMembro nome="Gabriela" />
                    <FamiliaMembro nome="Mariana" />
                </Familia>
            </Card>

            <Card titulo="#04 - Número Aleatório" color="#001E6C">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E8630A">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#035397">
                <ComParametro titulo='Segundo componente' aluno='Mariana' nota={9.1} />
            </Card>

            <Card titulo="#01 - Primeiro" color="#FCD900">
                <Primeiro />
            </Card>
        </div>
    </div >
)

export default app;