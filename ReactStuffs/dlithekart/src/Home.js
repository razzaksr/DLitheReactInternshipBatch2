import { beanbags, shoes } from "./Items";

const Home=()=>{

    const boxstyle={
        minWidth:'300px',
        minHeight:'300px',
        marginRight:'10px'
    }

    return(
        <>
            <div className="container">
                <h1 className="display-4 text-primary">Shoe's</h1>
                <div className="d-flex flex-row overflow-auto flex-nowrap">
                    {
                        shoes.map((data)=>(
                            <div className="card col-3 p-2 text-center" style={boxstyle}>
                                <img className="card-img" src={data.pic} alt="shoe"/>
                                <div className="card-body">
                                    <h1 className="card-title text-primary">{data.model}  {data.brand}</h1>
                                    <p className="card-text text-success">Colors {data.colors}</p>
                                    <p className="card-text text-warning">Type {data.type}</p>
                                    <p className="card-text text-danger">Price {data.cost}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <h1 className="display-4 text-success">Bean bags</h1>
                <div className="d-flex flex-row overflow-auto flex-nowrap">
                    {
                        beanbags.map((data)=>(
                            <div className="card col-3 p-2 text-center" style={boxstyle}>
                                <img className="card-img" src={data.pic} alt="shoe"/>
                                <div className="card-body">
                                    <h1 className="card-title text-primary">{data.brand}</h1>
                                    <p className="card-text text-success">Colors {data.size}</p>
                                    <p className="card-text text-danger">Price {data.cost}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home;