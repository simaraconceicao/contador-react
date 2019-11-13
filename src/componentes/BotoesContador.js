import React from 'react'


const BotoesContador = props => {

    return (
        <div>
            <button className="btnMaisUm"
                disabled={props.congelado}
                onClick={props.onClickAdicionar}
            >+1</button>
            <button
                className="btnMenosUm"
                disabled={props.congelado}
                onClick={props.onClickSubtrair}
            >-1</button>
            <button className="btnResetar"
                onClick={props.onClickResetar}
            >resetar</button>
        </div>

    )
}














export default BotoesContador;