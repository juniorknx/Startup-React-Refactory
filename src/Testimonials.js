import '../src/css/testimonials.css';
import TestimonialsBox from '../src/Testimonialsbox';

function Testimonials (){
    return (
        <div className="testimonials">
            < TestimonialsBox avatar="https://avatars.githubusercontent.com/u/26612524?v=4" description="Ja tive experiência com outras 4 empresas da área e a lorem ipsum dolar sit amet é sem sombra de dúvidas um texto ilustrativo." name="Julio Jr" company="Lorem Company" />
            < TestimonialsBox avatar="https://avatars.githubusercontent.com/u/26612524?v=4" description="Ja tive experiência com outras 4 empresas da área e a lorem ipsum dolar sit amet é sem sombra de dúvidas um texto ilustrativo." name="Julio Jr" company="Lorem Company" />
        </div>
    );
}

export default Testimonials