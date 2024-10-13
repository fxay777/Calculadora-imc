import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Importa o componente App

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente App */}
  </React.StrictMode>,
  document.getElementById('root') // Renderiza na div com id 'root'
);
