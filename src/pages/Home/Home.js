import React, { Component } from 'react'
import { reqHomeList, reqHomeBanner } from "../../utils/http"

import "./Home.styl"
import Banner from "./componets/Banner/Banner"
import List from "./componets/List/List"
import Nav from "./componets/Nav/Nav"

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            HomeList: [],
            banner: []
        }
    }
    componentDidMount() {
        reqHomeList().then(res => {
            if (res.data.code == 200) {
                this.setState({
                    HomeList: res.data.list[0].content
                })
            }
        })
        reqHomeBanner().then(res => {
            if (res.data.code==200) {
                this.setState({
                    banner: res.data.list
                })
            }
        })
    }
    render() {
        let { banner } = this.state
        return (
            <div className="Home">
                {banner.length > 0 ? <Banner banner={banner}></Banner> : null}
                <Nav></Nav>
                <List list={this.state.HomeList}></List>

            </div>
        )
    }
}
