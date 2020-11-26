import React, { Component } from 'react'
import {Switch,Route,Redirect,NavLink} from "react-router-dom"
import Header from "../../componets/Header"
import "./index.styl"
import Home from "../Home/Home"
import Cat from "../Cat/Cat"
import Cate from "../Cate/Cate"
import Mine from "../Mine/Mine"


export default class Index extends Component {
    render() {
        return (
            <div className="Index">
                 <Header title={"首页"}></Header>
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/cat" component={Cat}></Route>
                    <Route path="/index/cate" component={Cate}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>
            <div className="Index-footer">
                <NavLink to="/index/home" activeClassName="select">首页</NavLink>
                <NavLink to="/index/cate" activeClassName="select">分类</NavLink>
                <NavLink to="/index/cat" activeClassName="select">购物车</NavLink>
                <NavLink to="/index/mine" activeClassName="select">我的</NavLink>
            </div>
            </div>
        )
    }
}
