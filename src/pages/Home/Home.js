import React, { Component } from 'react'
import {reqHomeList} from "../../utils/http"

import "./Home.styl"
import Banner from "./componets/Banner/Banner"
import List from "./componets/List/List"
import Nav from "./componets/Nav/Nav"

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            HomeList : []
        }
    }
    componentDidMount(){
        reqHomeList().then(res=>{
            if(res.data.code == 200){
                this.setState({
                    HomeList:res.data.list[0].content
                })
            }
        })
    }
    render() {
        return (
            <div className="Home">
               <Banner></Banner>
               <Nav></Nav>
               <List list={this.state.HomeList}></List>
               
            </div>
        )
    }
}
