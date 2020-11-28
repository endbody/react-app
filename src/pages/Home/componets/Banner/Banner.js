import "./Banner.styl"
import React, { Component } from 'react'

export default class Banner extends Component {


  componentDidMount() {
    
    var swiper = new Swiper('.swiper-container', {
      autoplay:true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
  render() {
    let {banner} = this.props
    return (
      <div className="banner">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              banner.map(item=>{
                return (
                  <div className="swiper-slide" key={item.id}><img src={item.img} alt="" /></div>
                )
              })
            }
          </div>
    <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
