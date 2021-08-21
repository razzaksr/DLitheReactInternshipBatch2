import Card from './Card';
import {yet} from './Info';

const Gallary=()=>{
    return(
        <>
            <div className="row justify-content-center">
                {
                    yet.map((data)=>(
                        <Card title={data.title} location={data.pics}/>
                    ))
                }
                {/* <div className="card col-4">
                    <img className="card-img" style={{height:'200px'}} alt="imag" src={yet[0].pics}/>
                    <h1 className="display-7 text-primary text-center">{yet[0].title}</h1>
                </div>
                <div className="card col-4">
                    <img className="card-img" style={{height:'200px'}} alt="imag" src={yet[1].pics}/>
                    <h1 className="display-7 text-primary text-center">{yet[1].title}</h1>
                </div>
                <div className="card col-4">
                    <img className="card-img" style={{height:'200px'}} alt="imag" src={yet[2].pics}/>
                    <h1 className="display-7 text-primary text-center">{yet[2].title}</h1>
                </div> */}
            </div>
        </>
    )
}

export default Gallary;