import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Index from "./pages/index/Index"
import Detail from "./pages/detail/Detail"
import List from "./pages/list/List"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"



import "./assets/css/reset.css"
import "./assets/js/rem"
import "./App.styl"



export default function App() {
  return (
    <div className="App">
     <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/index" component={Index}></Route>
      <Route path="/detail" component={Detail}></Route>
      <Route path="/list/:name/:id" component={List}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <Redirect to="/login"></Redirect>       
     </Switch>
    </div>
  )
}
