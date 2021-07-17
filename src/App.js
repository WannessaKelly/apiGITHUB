import logo from './logo.svg';
import { useState } from 'react'
import './App.css';



function App(props) {
const [ username, setUsername ] = useState({})
  
  function handleTextChange(e) {
    e.preventDefault()
    fetch(`https://api.github.com/users/${e.target.value}`)
      .then(res => res.json())
      .then(res => setUsername(res));
  }

  return (
    <div>
      <strong>Olá, {props.name}</strong>
        <div>
            Digite seu usuário do GITHUB: <input type="text" onChange={handleTextChange}></input>
             {Object.entries(username).map((values, key) => (
              <div key={key}><strong>{values[0]}:</strong>{values[1]}</div>
            ))}
        
    </div>
    </div>
  );
  
}
export default App;
  