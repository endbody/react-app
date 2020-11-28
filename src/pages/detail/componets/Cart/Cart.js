import React, { Component } from 'react'

import {reqCartAdd} from "../../../../utils/http"
import {successAlert} from "../../../../utils/alert"


export default class Cart extends Component {
    constructor() {
        super()
        this.state = {
            n: 0
        }
    }

    select(index) {
        this.setState({
            n: index
        })
    }

    add(){

        reqCartAdd({
            uid:JSON.parse(localStorage.getItem("userInfo")).uid,
            goodsid:this.props.detail.id,
            num:1
        }).then(res=>{
          if(res.data.code===200){
              successAlert(res.data.msg)
              this.props.hiend()
          }
        })
    }

    isShow(e){
        if(e.target.className==="shade"){
            this.props.hiend()
        }
    }
    render() {
        let { detail } = this.props
        let { n } = this.state
        return (
            <div>
                <div className="shade" onClick={(e)=>this.isShow(e)}>
                    <div className="inner">
                        <div className="title">
                            <img className="pic" src={detail.img} alt="" />
                            <p>{detail.goodsname}</p>
                        </div>
                        <p className="infoTitle">{detail.specsname}</p>
                        <ul className="attr">

                            {
                                detail.specsattr.map((item, index) => {
                                    return (<li key={item} className={n === index ? "select" : ""} onClick={() => this.select(index)}>{item}</li>)
                                })
                            }

                        </ul>
                    </div>

                    <div className="footer">
                        <button onClick={(()=>this.add())}>加入购物车</button>
                    </div>

                </div>
            </div>
        )
    }
}
