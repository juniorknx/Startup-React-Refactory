import '../src/css/footer.css'
import { SocialIcon } from 'react-social-icons';

function Footer (){
    return (
        <footer>
            <div className="rodape">
                <div className="menu-logo">
                    <a href="#">StartUp.</a>
                    <p>Desenvolvimento Web</p>
                </div>

                <div className="about">
                    <h2>Sobre</h2>
                    <p>Lorem Ipsum dolar sit amet simple text</p>
                </div>

                <div className="address">
                    <h2>Endereço</h2>
                    <ul>
                        <li>Av Assis Brasil - 330</li>
                        <li><a href="tel:55513232-3232">51 3232-3232</a></li>
                        <li><a href="mailto:contato@contato.com">contato@contato.com</a></li>
                    </ul>
                </div>
                    
                <div className="social">
                    <SocialIcon url="https://twitter.com/jaketrent" network="facebook"  style={{margin:10}}/>
                    <SocialIcon url="https://twitter.com/jaketrent" network="instagram"  style={{margin:10}}/>
                    <SocialIcon url="https://twitter.com/jaketrent" network="whatsapp"  style={{margin:10}}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer 