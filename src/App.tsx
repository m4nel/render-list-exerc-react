import React from 'react';
import Botao from './components/Botao';

import './App.css';

function App() {

  let list = [
    { name: "Leticia", age: 13 },
    { name: "Sabrina", age: 14 },
    { name: "Sorriso", age: 20 },
    { name: "Fernando", age: 16 }
  ]


  return (
    <div>
      <ul >
{list.map((item, index)=> (
  <li key={index}>
<Botao data={item}/>
</li>))}
      </ul>
    </div>
  );
}

export default App;
