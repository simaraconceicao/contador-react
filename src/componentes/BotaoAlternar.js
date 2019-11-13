import React from 'react'


const BotaoAlternar = props => {

    return (
        <button onClick={props.onClickMetodo}>
            {props.visibilidade === true 
                ? "Fechar Contador" 
                : "Abrir Contador"}
        </button>
    )
}




export default BotaoAlternar;