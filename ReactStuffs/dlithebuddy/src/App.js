import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import Menu from "./Menu"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Fresh from "./Fresh";
import Update from "./Update";

const App=()=>{
  return(
    <>
      <Menu/>
      <Switch>
        <Route path="/" exact component={()=><Home/>} />
        <Route path="/new" exact component={()=><Fresh/>} />
        <Route path="/edit/:pos" exact component={()=><Update/>} />
        {/* <Route path="/delete" exact component={} /> */}
      </Switch>
    </>
  )
}

export default App;