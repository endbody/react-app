import React, { Component } from 'react'

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
    render() {
        let { detail } = this.props
        let { n } = this.state
        return (
            <div>
                <div className="shade">
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
