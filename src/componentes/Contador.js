import React from 'react'
import BotaoAlternar from './BotaoAlternar';
import BotoesContador from './BotoesContador';
import BotaoFinalizar from './BotaoFinalizar';


class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            visibilidade: true,
            congelado: false
        };
    }

    adicionarUm = () => {
        this.setState((prevState) => {
            return {
                contador: prevState.contador + 1
            }
        })
    }

    subtrairUm = () => {
        this.setState(prevState => {
            return {
                contador: prevState.contador - 1
            }
        })
    }

    resetar = () => {
        this.setState(() => {
            return {
                contador: 0,
                congelado: false
            }
        })
    }

    alternarVisibilidade = () => {
        this.setState((estadoAnterior) => {
            return {
                visibilidade: !estadoAnterior.visibilidade
            }
        })
    }

    desabilitarBotoes = () => {
        this.setState((estadoAnterior) => {
            return {
                congelado: true
            }
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.contador}</p>

                <BotaoAlternar
                    onClickMetodo={this.alternarVisibilidade}
                    visibilidade={this.state.visibilidade}
                />



                {this.state.visibilidade && (
                    <div>
                        <BotoesContador
                            onClickAdicionar={this.adicionarUm}
                            onClickSubtrair={this.subtrairUm}
                            onClickResetar={this.resetar}
                        />



                        {this.state.contador !== 0 && (
                            <BotaoFinalizar
                                onClickFinalizar={this.desabilitarBotoes}
                            />
                        )}

                    </div>
                )}
            </div>
        );
    }
}

export default Contador;