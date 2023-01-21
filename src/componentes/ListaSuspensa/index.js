import './ListaSuspensa.css'

const ListaSuspensa = (props) =>{



    return(
        <div className='ListaSuspensa'>
            <label>{props.label}</label>
                              {/*Pegando o valor digitado e enviado para o arquivo anterior pelo aoAlterado, para lá ser atribuído ao valor*/}
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>

                {props.itens.map(item => <option key={item}>{item}</option>)}

                {/*Para cada item do array de string Itens, eu vou criar um item que 
                seja do tipo option. 
                Key= Para cada item criado no novo array, precisamos passar uma chave
                além do novo valor. E passamos o próprio nome do item como chave, e 
                o valor vira a option com o texto do item*/}

            </select>

        </div>
    )
}

export default ListaSuspensa;