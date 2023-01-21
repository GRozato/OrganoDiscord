import { useState } from 'react';
import './CampoText.css';


const CampoText = (props) => {
/*
    let valor = '';

    const [valor, setValor] = useState('');
    Use = hook
    Ele faz com que você tenha uma chave que tem de valor do parâmetro do useState
    e você também tem uma função para setar o valor. É do react. E você lê usando 
    a chave do valor e altera pelos set. E isso é usado dentro de um array.
    E agora, eu posso colocar valores fixos padrões no useEstate


    const aoDigitado = (evento) => {
        setValor(evento.target.value); // Será atribuído o valor digitado à variável valor
        console.log(evento.target.value); //Cada valor digitado no formulário será 
                                //impresso no console
    }

*/

const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
    //AoAlterado muda o valor, devolvendo para o código do formulário com o caracter
    //que foi digitado
}

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
    )
}

export default CampoText;