import React from 'react'

import "./Info.styl"

export default function Info(props) {
    let {detail} = props
    return (
        <div className="Info">
            <div className="left">

    <p className="title">{detail.goodsname}</p>
                <div className="r-tag">
                    收藏
                </div>
                <div className="Tag">
    <span className="price">￥{detail.price}</span>
                    {detail.ishot==1?<span className="tag-box"> 热卖</span>:null}
                   { detail.isnew==1?<span className="tag-box"> 新品</span>:null}
                </div>
    <p className="oldPrice">￥{detail.market_price}</p>
            </div>
          
        </div>
    )
}
