import RenderIf, { RenderElse } from './RenderIf'

const usuarioInfo = props => {
    const usuario = props.usuario || {}

    return (
        <div>
            <RenderIf test={usuario && usuario.nome}>
                Seja bem-vindo(a) <strong>{usuario.nome}</strong>
                <RenderElse>
                    Seja bem-vindo <strong>Amigo</strong>
                </RenderElse>
            </RenderIf>
        </div>
    )
}

export default usuarioInfo;