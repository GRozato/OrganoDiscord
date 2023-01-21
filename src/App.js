import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome:'!',
      corPrimaria:'#e74c3c',
      corSecundaria:'#eaa39b',
    },
    {
      nome:'Guardiões do servidor',
      corPrimaria:'#00ffe3',
      corSecundaria:'#c4fff9',
    },
    {
      nome:'Bixos',
      corPrimaria:'#e91e63',
      corSecundaria:'#e488a7',
    },
    {
      nome:'Estrelas',
      corPrimaria:'#f1c40f',
      corSecundaria:'#f0e4b2',
    },
    {
      nome:'Bots',
      corPrimaria:'#3498db',
      corSecundaria:'#abcbe1',
    },
    {
      nome:'Andarilhos',
      corPrimaria:'#1abc9c',
      corSecundaria:'#a2dbcf',
    }
  ]

  const [parceiros, setParceiros] = useState([])

  const aoNovoParceiroAdicionado = (parceiro) => {
    debugger
    setParceiros([...parceiros, parceiro])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario nomesDosTimes={times.map(time => time.nome)} aoParceiroCadastrado={parceiro => aoNovoParceiroAdicionado(parceiro)}/>
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        parceiros={parceiros.filter(parceiro => parceiro.cargo === time.nome)}
        />)} 
      {/*Para cada times dentro da lista "times" crie uma tag de time, onde gerará uma session com o time, e o nome dela será o time do time iterado*/}
      <Rodape/>

    </div>
  );
}

export default App;
