import React, { Component } from 'react'
import Header from "../../componets/Header"
import List from "../Home/componets/List/List"
import {reqGoodsList} from "../../utils/http"

export default class MaxList extends Component {


    constructor(){
        super()
        this.state={
            list:[]
        }
    }

    componentDidMount(){
        reqGoodsList({
            fid:this.props.match.params.id
        }).then(res=>{
            if(res.data.code === 200){
                this.setState({
                    list:res.data.list
                })
            }
        })
    }
    render() {
  
        let {name,id} = this.props.match.params
        return (
            <div>
                <Header title={name} back></Header>
                <List list={this.state.list}></List>
            </div>
        )
    }
}
