import React from 'react'
import Navimg from "../../../../assets/img/01.png"
import "./Nav.styl"
export default function Nav() {
    return (
        <div className="Nav">
           <ul className="Nav-Box">
               <li><img src={Navimg} alt=""/>
               <p>限时抢购</p>
               </li>
               <li><img src={Navimg} alt=""/>
               <p>积分商城</p>
               </li>
               <li><img src={Navimg} alt=""/>
               <p>联系我们</p>
               </li>
               <li><img src={Navimg} alt=""/>
               <p>商品分类</p>
               </li>
           </ul>
        </div>
    )
}
