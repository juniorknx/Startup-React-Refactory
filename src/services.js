import '../src/css/services.css';
import Cards from '../src/Cards';
import cloudhost from '../src/assets/cloudhost.svg';
import domain from '../src/assets/domain.svg';
import responsive from '../src/assets/responsive.svg';
import multiscreen from '../src/assets/multiscreen.svg';
import mediasocial from '../src/assets/mediasocial.svg';
import chat from '../src/assets/chat.svg';
import blog from '../src/assets/blog.svg';

function Services (){
    return (
        <div className="services">
            < Cards title="Domínio Personalizado" image={domain} description="Lorem ipsum dolar sit amet simple text dolar sit amet simple text." />
            < Cards title="Hospedagem" image={cloudhost} description="Lorem ipsum dolar sit amet simple text dolar sit amet simple text." />
            < Cards title="Site Responsivo" image={multiscreen} description="Lorem ipsum dolar sit amet simple text dolar sit amet simple text." />
            < Cards title="Redes Sociais" image={mediasocial} description="Lorem ipsum dolar sit amet simple text dolar sit amet simple text." />
            < Cards title="Chat Online" image={chat}  description="Lorem ipsum dolar sit amet simple text dolar sit amet simple text." />
            < Cards title="Blog Integrado" image={blog} description="Lorem ipsum dolar sit amet simple text dolar sit amet simple text." />
        </div>
    );
}

export default Services