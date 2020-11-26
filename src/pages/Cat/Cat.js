import React, { Component } from 'react'
import Header from "../../componets/Header"
import radio_hig from "../../assets/img/radio_hig.png"
import radio_nor from "../../assets/img/radio_nor.png"
import "./Cat.styl"


export default class Cat extends Component {
    render() {
        return (
            <div className="Cat">
                <Header title={"购物车"}></Header>
                <div className="item">
                    <div className="icon"><img src={radio_nor} alt="" /></div>
                    <img className="pic" src="" alt="" />
                    <div className="con">
                        <p className="title">秋日蓝装</p>
                        <div className="btn-Box">
                            <span className="add">+</span><input type="text" value="1" className="num"  /><span className="sub">-</span>
                        </div>
                        <p className="AllPrice">总价：￥12451</p>
                    </div>
                    <p className="price">￥368.00</p>
                </div>
            </div>
        )
    }
}
