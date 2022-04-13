const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const aleatorio = (props) => {
    const { min, max } = props
    const numeroAleatorio = randomIntFromInterval(min, max);

    return <>
        <h2>Número aleatório</h2>
        <p>{numeroAleatorio}</p>
    </>;
}

export default aleatorio;