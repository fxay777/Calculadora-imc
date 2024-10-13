import React, { useState } from 'react';
import './index.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (event) => {
    event.preventDefault();
    if (altura && peso) {
      const alturaMetros = parseFloat(altura) / 100;
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
      classificarIMC(imcCalculado);
    }
  };

  const classificarIMC = (imc) => {
    const imcNum = parseFloat(imc);
    if (imcNum < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcNum >= 18.5 && imcNum <= 24.9) {
      setClassificacao('Peso normal');
    } else if (imcNum >= 25 && imcNum <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcNum >= 30) {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>

      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
