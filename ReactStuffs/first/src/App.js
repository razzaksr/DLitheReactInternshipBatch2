const App=()=>{
    return(
        <>
            <h1 className="display-4"> MERN Stack </h1>
            <ol>
                <li>Mongo Db Atlas</li>
                <li>Express Back End</li>
                <li>React Front end</li>
                <li>Node platform</li>
            </ol>
        </>
    )
}

const Application=()=>{
    return(
        <>
            <div className="card col-6">
                <h1 className="card-title">Front End development</h1>
                <div className="card-body">
                    <p className="text-primary">React is library but angular is framework</p>
                </div>
            </div>
        </>
    )
}

export default App;
export {Application}