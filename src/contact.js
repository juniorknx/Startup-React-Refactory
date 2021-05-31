import '../src/css/contact.css'
import Button from '../src/Button'

function Contact (){
    return (
        <div className="contact">
            <div>
                <h1>Nossa equipe está sempre a disposição</h1>
            </div>

            <div className="inputs">
                <input type="email" placeholder="E-mail"></input>
                <Button title="Enviar" />
            </div>
        </div>
    );
}

export default Contact