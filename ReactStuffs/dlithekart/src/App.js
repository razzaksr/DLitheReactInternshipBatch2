import react, { useState } from 'react';
import { createContext, useContext } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Menu from "./Menu"
import SignUp from "./SignUp"

export const user=react.createContext()

const App=()=>{
  const[person,setPerson]=useState("")
  return(
    <>
      <user.Provider value={[person,setPerson]}>
        <Menu/>
        <Switch>
          <Route path="/" exact component={()=><Home/>}/>
          <Route path="/login" exact component={()=><Login/>}/>
          <Route path="/signup" exact component={()=><SignUp/>}/>
        </Switch>
      </user.Provider>
    </>
  )
}
export default App