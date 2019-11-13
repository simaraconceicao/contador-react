import React from 'react';
import './App.css';
import Contador from './componentes/Contador'
import BotaoAlternar from './componentes/BotaoAlternar'
import BotaoFinalizar from './componentes/BotaoFinalizar'
import BotoesContador from './componentes/BotoesContador'


function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}
export default App;
