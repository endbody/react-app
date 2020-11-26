import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Header from "../../componets/Header"
import "./Cate.styl"
import { reqCateList } from "../../utils/http"
import { successAlert } from "../../utils/alert"


export default class Cate extends Component {

    constructor() {
        super()
        this.state = {
            list: [],
            n: 0,
            children: []
        }
    }

    componentDidMount() {
        reqCateList().then(res => {
            if (res.data.code == 200) {
                this.setState({
                    list: res.data.list
                },()=>{
                    this.title(this.state.n)
                })
            }
        })
      
    }

    title(index) {
        console.log(index);
        this.setState({
            n: index,
            children: this.state.list[index].children
        })
    }

    toList(name,id){
        console.log(name)
        this.props.history.push("/list/"+name + "/" + id)
    }

    render() {
       
        let { list, n, children } = this.state
        return (
            <div className="Cate">
                <Header title={"商品分类"}></Header>
                <ul className="Cate-left">
                    {
                        list ? list.map((item, index) => {
                            return (
                                <li key={item.id} className={index == n ? "select" : ''} onClick={() => this.title(index)}>{item.catename}</li>
                            )
                        }) : null
                    }

                </ul>
                <ul className="Cate-right">
                    {
                        children.map(item => {
                            return (
                               
                                <li key={item.id} onClick={()=>this.toList( item.catename,item.id)}>
                                    <img src={ item.img } alt="" />
                                    <p>{ item.catename }</p>
                                </li>
                              
                            )
                        })

                    }
            
                </ul>
            </div>
        )
    }
}
