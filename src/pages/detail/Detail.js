import React, { Component } from 'react'
import Header from "../../componets/Header"
import "./Detail.styl"
import Info from "./componets/Info/Info"
import querystring from "querystring"
import { reqDetail,reqCartAdd } from "../../utils/http"
import { successAlert } from "../../utils/alert"
import Cart from "./componets/Cart/Cart"


export default class Detail extends Component {

    constructor() {
        super()
        this.state = {
            detail: {},
            isShow: false,
           
        }
        this.con = React.createRef()
    }

    componentDidMount() {
        let id = querystring.parse(this.props.history.location.search.slice(1)).id
        reqDetail(id).then(res => {
            if (res.data.code === 200) {
                let list = res.data.list[0]
                list.specsattr = JSON.parse(list.specsattr)
               
                this.setState({
                    detail: list

                }, () => {
                    this.con.current.innerHTML = this.state.detail.description
                })
            }
        })


    }

    add() {

        // reqCartAdd({
        //     uid:parse(localStorage.setItem("userInfo")).uid,
        //     goodsid:this.state.detail.id,
        //     num:1
        // }).then(res=>{
        //   if(res.data.code===200){
        //       successAlert(res.data.msg)
        //   }
        // })

        this.setState({
            isShow: !this.state.isShow
        })
    }



    render() {

        let { detail, isShow, n } = this.state

        return (

            <div className="Detail">
                <Header title={"商品详情"} back></Header>
                <div className="Detail-Box">
                    <img className="img" src={this.state.detail.img} alt="" />
                    <Info detail={this.state.detail}></Info>
                </div>
                {
                    <div ref={this.con} ></div>
                }

                <div className="footer">
                    <button onClick={() => this.add()}>加入购物车</button>
                </div>

                {detail.img&&isShow ?  <Cart detail={detail}></Cart>:null}
            </div>
        )
    }
}
