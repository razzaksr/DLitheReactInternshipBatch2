import { useEffect } from "react"

const Wishlist=()=>{

    const person=localStorage.getItem('who')

    let simple=new Array()

    //const iterate=()=>{
        const txt=localStorage.getItem('wishlist')
        const tmp=JSON.parse(txt)
        simple=tmp.filter((data)=>{
            return data.user===person
        })
    //}
    
    //useEffect(iterate(),[])

    

    const boxstyle={
        minWidth:'300px',
        minHeight:'50px',
        marginBottom:'10px'
    }

    return(
        <>
            <div className="container">
            <div className="row justify-content-center p-2">
            {
                        simple.map((data)=>(
                            <div className="card col-4 p-2 text-center" style={boxstyle}>
                                <img className="card-img w-100" src={data.item.pic} alt="shoe"/>
                                <div className="card-body">
                                    <h1 className="card-title text-primary">{data.item.model}  {data.item.brand}</h1>
                                    <p className="card-text text-success">Colors {data.item.colors}</p>
                                    <p className="card-text text-warning">Type {data.item.type}</p>
                                    <p className="card-text text-danger">Price {data.item.cost}</p>
                                </div>
                            </div>
                        ))
                    }
            </div>
            </div>
        </>
    )
}

export default Wishlist