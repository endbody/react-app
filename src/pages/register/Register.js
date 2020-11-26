import React, { Component } from 'react'
import Header from "../../componets/Header"
import "./Register.styl"
import {reqRegister} from "../../utils/http"


export default class Register extends Component {


    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                password:"",
                nickname:""
            }
        }
    }

    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }

    register(){
        reqRegister(this.state.user).then(res=>{
            if(res.data.code===200){
                alert("成功")
            }
        })
    }

    render() {
        return (
            <div className="Register" >
                <Header title={"注册"} back></Header>
                <div className="Register-Box">
                    <div className="Register-line">
                        <span>手机号：</span><input type="text" onChange={(e)=>this.changeUser(e,"phone")} />
                    </div>
                    <div className="Register-line">
                        <span>昵称：</span><input type="text" onChange={(e)=>this.changeUser(e,"nickname")} />
                    </div>
                    <div className="Register-line">
                        <span>密码：</span><input type="text" onChange={(e)=>this.changeUser(e,"password")} />
                    </div>
                   
                    <button onClick={()=>this.register()}>注册</button>
                </div>
            </div>
        )
    }
}
