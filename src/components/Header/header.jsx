import './styles.css'
import Bilhete from '../../assets/harry-potter.png'


export function Header() {
    return (
        <header className='header-app'>
            <div>
                <h1>Eventos</h1>
                <img src={Bilhete}/>
                {/* Repare que precisa ser o msm nome que você deu na importação */}
                {/* assim como a importação tem que ser na pasta correta */}
            </div>
            <nav>
                <ul>
                    <li><a>Meus eventos</a></li>
                    <li><a>Crie seu evento</a></li>
                    <li><a>Acesse sua conta</a></li>
                </ul>
            </nav>
        </header>
    )
}