import '../src/css/services.css';

function Cards (props){
    return (
        <div className="cards">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Cards