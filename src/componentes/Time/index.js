import Parceiro from '../Parceiro';
import './Time.css';

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria}

        return(
            /*Se essa condição for verdadeira, ele executará o que vem em seguida. Se não tiver ninguém naquele time, não haverá time na page*/
            
            (props.parceiros.length > 0) && <section className='time' style={css}>
                <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='parceiros'>
                    {props.parceiros.map(parceiro => <Parceiro key={parceiro.nome} corDeFundo={props.corPrimaria} nome={parceiro.nome} funcao={parceiro.funcao} imagem={parceiro.imagem}/>)}
                </div>
            </section>
    
        )
    
}

export default Time; 