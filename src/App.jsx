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
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

const app = () => (
    <div className='App' >
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#12 - Contador" color="#002776">
                <Mega />
            </Card>
            <Card titulo="#12 - Contador" color="#002776">
                <Contador numeroInicial={10} />
            </Card>
            <Card titulo="#11 - Componente Controlado" color="#ffdf00">
                <Input />
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#009c3b">
                <IndiretaPai />
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#002776">
                <DiretaPai />
            </Card>
            <Card titulo="#08 - Par ou Impar" color="#ffdf00">
                <ParOuImpar numero={6} />
                <UsuarioInfo usuario={{ nome: 'Mariana' }} />
                <UsuarioInfo usuario={{ email: 'mari@ana.com' }} />
            </Card>
            <Card titulo="#07 - Produtos" color="#009c3b">
                <TabelaProduto />
            </Card>
            <Card titulo="#06 - Repetição" color="#002776">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 - Componente com filhos" color="#ffdf00">
                <Familia sobrenome="Oliveira">
                    <FamiliaMembro nome="Everton" />
                    <FamiliaMembro nome="Gabriela" />
                    <FamiliaMembro nome="Mariana" />
                </Familia>
            </Card>

            <Card titulo="#04 - Número Aleatório" color="#009c3b">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#002776">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#ffdf00">
                <ComParametro titulo='Segundo componente' aluno='Mariana' nota={9.1} />
            </Card>

            <Card titulo="#01 - Primeiro" color="#009c3b">
                <Primeiro />
            </Card>
        </div>
    </div >
)

export default app;