import DiretaFilho from "./DiretaFilho";

const DiretaPai = props => {
    return (
        <div>
            <DiretaFilho texto="Mariana" numero={22} nerd={true} />
            <DiretaFilho texto="Pedro" numero={17} nerd={false} />
        </div>
    )
}

export default DiretaPai;