import React from 'react'
import {Link} from "react-router-dom"
import filtersPrice from "../../../../filters/filtersPrice"


import "./List.styl"

export default function List(props) {
    let {list} = props
    console.log(list);
    return (
        <div className="Home-List">
           <ul className="Home-ListBox ">


               {
                   list.map(item=>{
                       return (
                        <Link to={"/detail?id="+item.id} key={item.id}>
                        <li >
                        <img src={item.img} alt="" className="Home-ListImg" />
                        <div className="Home-ListInfo">
                         <p className="Home-ListTitle">
                             {item.goodsname}
                         </p>
                       <p className="price">￥{filtersPrice(item.price)}</p>
                         <button className=" Home-LsitBtn">立即抢购</button>
                        </div>
                    </li>
                    </Link>
                       )
                   })
               }
              
           </ul>
        </div>
    )
}
