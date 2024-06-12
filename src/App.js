import {useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import api from './services/api';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});

  async function handleSearch(){
    
    if(input === ''){
      alert("Preencha algum CEP")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data)

    }catch{
      alert("Ops erro ao buscar");
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>


      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu CEP..." 
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF' /> 
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 79003222</h2>

        <span>Rua Teste</span>
        <span>Complemento: teste</span>
        <span>Vila Rosa</span>
        <span>São Paulo - SP</span>
      </main>

    </div>
  );
}

export default App;
