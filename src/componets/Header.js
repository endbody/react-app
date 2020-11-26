import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import register from '../pages/register/Register'
import "./Header.styl"

 class Header extends Component {

    goBack(){
        this.props.history.goBack(-1)
    }

    render() {
        let {title,register,back} = this.props
        return (
            <div className="header">
               { back ? <span className="header-back" onClick={()=>this.goBack()}>返回</span> : null}
        <span className="header-title">{title}</span>
               { register ? <span className="header-register">注册</span> : null}
            </div>
        )
    }
}

export default withRouter(Header)