const Card=(props)=>{
    return(
        <div className="card col-4">
            <img className="card-img" style={{height:'200px'}} alt="imag" src={props.location}/>
            <h1 className="display-7 text-primary text-center">{props.title}</h1>
        </div>
    )
}

export default Card;