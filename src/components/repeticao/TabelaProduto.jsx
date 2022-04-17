import './TabelaProduto.css'
import produtosData from "../../data/produtos"

const produtos = () => {
    return (
        <div className="TabelaProduto">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosData.map((produto, i) =>
                        <tr key={produto.id} className={i % 2 === 0 ? "Par" : ""}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preço}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default produtos;