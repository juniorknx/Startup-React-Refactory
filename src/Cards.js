import '../src/css/services.css';


function Cards (props){
    return (
        <div className="cards">
            <img src={props.image} style={{width:70, marginBottom:10}}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Cards