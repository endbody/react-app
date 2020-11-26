import React, { Component } from 'react'
import Header from "../../componets/Header"
import "./Login.styl"
import {reqLogin} from "../../utils/http"
import {successAlert} from "../../utils/alert"

export default class Login extends Component {

    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                password:""
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

    login(){
        // console.log( ,1)
        reqLogin(this.state.user).then(res=>{
            if(res.data.code==200){
                successAlert(res.data.msg)
                localStorage.setItem("userInfo",JSON.stringify(res.data.list))
                this.props.history.push("/index/home")
               
            }
        })
    }
    render() {
        return (
            <div className="Login">
                 <Header title={"登陆"} register></Header>
               <div className="login-Box">
               <div className="Login-line">
                    <span>账号：</span><input type="text" onChange={(e)=>this.changeUser(e,"phone")} />
                </div>
                <div className="Login-line">
                    <span>密码：</span><input type="text" onChange={(e)=>this.changeUser(e,"password")} />
                </div>
                <p>
                    <a href="#">忘记密码</a>
                </p>
                <button onClick={()=>this.login()}>登陆</button>
               </div>
            </div>
        )
    }
}
