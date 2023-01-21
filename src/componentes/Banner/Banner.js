import './Banner.css'

export const Banner = () => {
    //JSX - não é html, mas parece. O React vai entender o que é isso e dar 
    //um append no DOM.
    return(
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página"/>
        </header> 
    )
}