import './Formulario.css';
import CampoText from '../CampoText';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [imagem, setImagem] = useState('');
    const [cargo, setCargo] = useState('');

const aoSalvar = (evento) => {

    evento.preventDefault();

    props.aoParceiroCadastrado({
        nome,
        funcao,
        imagem,
        cargo
    })    
    setNome('')
    setCargo('')
    setImagem('')
    setFuncao('')
    
}

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de cada usuário do Servidor do discord</h2>
                <CampoText 
                    obrigatorio={true} 
                    label="Nome:" 
                    placeholder="Digite seu nome:" 
                    valor={nome} // Valor padrão do formulário
                    aoAlterado={valor => setNome(valor)}
                    //E quando for alterado, o valor do nome se torna o que for escrito
                />

                <CampoText 
                    obrigatorio={true} 
                    label="Função:" 
                    placeholder="Digite a função:" 
                    valor = {funcao}
                    aoAlterado = {valor => setFuncao(valor)}
                />
                <CampoText 
                    label="Imagem:" 
                    placeholder="Informe o endereço da imagem:" 
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Cargo" 
                    itens={props.nomesDosTimes} 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Botao texto="Criar card"/>
            </form>
        </section>
    )
}

export default Formulario;