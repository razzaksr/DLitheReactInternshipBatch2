import react, { useState } from 'react';
import { createContext, useContext } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Menu from "./Menu"
import SignUp from "./SignUp"
import {begin, end} from './Logged'
import Wishlist from './Wishlist';
import Kart from './Kart';

export const user=react.createContext()

const App=()=>{
  /* let hai=new Array()
  localStorage.setItem('wishlist',JSON.stringify(hai))
  localStorage.setItem('kart',JSON.stringify(hai)) */
  //end()
  //begin('Razak')
  const[person,setPerson]=useState("")
  return(
    <>
      <user.Provider value={[person,setPerson]}>
        <Menu/>
        <Switch>
          <Route path="/" exact component={()=><Home/>}/>
          <Route path="/login" exact component={()=><Login/>}/>
          <Route path="/signup" exact component={()=><SignUp/>}/>
          <Route path="/wish" exact component={()=><Wishlist/>}/>
          <Route path="/kart" exact component={()=><Kart/>}/>
        </Switch>
      </user.Provider>
    </>
  )
}
export default App