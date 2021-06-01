import '../src/css/testimonials.css';

function TestimonialsBox (props){
    return (
        <div className="box">
                <div className="avatar">
                    <img src={props.avatar} />
                </div>

                <div className="cards-description">
                    <p>{props.description}</p>
                    <h2>{props.name}</h2>
                    <h3>{props.company}</h3>
                </div>
        </div>
    );
}

export default TestimonialsBox