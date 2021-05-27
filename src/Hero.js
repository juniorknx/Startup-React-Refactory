import '../src/css/hero.css';
import hero from '../src/assets/hero.svg';

function Hero () {
    return (
        <div className="hero">
            <div className="img-hero">
                <img src={hero} alt="hero" />
            </div>

            <div className="hero-info">
                <h3>Alavanque seu negócio com um</h3>
                <h1>Website Incrível</h1>
            </div>
        </div>
    );
}

export default Hero