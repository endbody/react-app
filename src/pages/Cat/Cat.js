import React, { Component } from 'react'
import Header from "../../componets/Header"
import radio_hig from "../../assets/img/radio_hig.png"
import radio_nor from "../../assets/img/radio_nor.png"
import { reqCartList, reqCartEdit, reqCartDel } from "../../utils/http"
import "./Cat.styl"
import { successAlert, confirmAlert } from '../../utils/alert'
import edit_nor from "../../assets/img/editor_nor.png"
import edit_hig from "../../assets/img/editor_hig.png"
import filtersPrice from "../../filters/filtersPrice"




export default class Cat extends Component {

    constructor() {
        super()
        this.state = {
            list: [],
            isAll: false,
            isEdit: false,
            checkIdArr: []

        }
        this.checkIdArr=[]  
        this.isopen=true;
    }

    componentDidMount() {
        this.init()
    }

    init() {
        this.changeId()
        console.log(this.checkIdArr);
        reqCartList(JSON.parse(localStorage.getItem("userInfo")).uid).then(res => {
            
            if (res.data.code == 200) {
                this.isopen=true;
               
                let list = res.data.list ? res.data.list : []
            list.forEach(item=>{
               let obj= this.checkIdArr.find(i=>i.id==item.id)
                item.checked=obj?obj.checked:false
            })

                this.setState({
                    list
                })
            }
        })
    }

    changeId() {
        let { list } = this.state
        this.checkIdArr = list.map(item => {
            return {
                id:item.id,
                checked:item.checked
            }
        })
    }


    editAdd(id) {
        
        reqCartEdit({
            id,
            type: 2
        }).then(res => {
            if (res.data.code === 200) {
               
                this.init()

            }
        })
    }

    editSub(id, num) {
        if (num <= 1) {
            successAlert("商品不能为零")
            return
        }
        if(this.isopen){
            this.isopen=false;
            reqCartEdit({
                id,
                type: 1
            }).then(res => {
                if (res.data.code === 200) {
                   
                    this.init()
                }
            })
        }
       
    }

    select(index) {
        let { list } = this.state
        list[index].checked = true
        this.setState({
            list
        })
    }

    checkAll() {
        let { list } = this.state

        this.setState({
            isAll: !this.state.isAll
        }, () => {
            list.forEach(item => {
                item.checked = this.state.isAll
            })
            this.setState({
                list
            })
        })
    }

    edit() {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    Del(id) {
        confirmAlert(() => {
            reqCartDel({ id }).then(res => {
                if (res.data.code === 200) {
                    successAlert(res.data.msg)
                    this.init()
                }
            })
        })

    }
    render() {
        let { list, n, isEdit, isAll } = this.state
        let sum = 0;
        list.forEach(item => {
            if (item.checked) {
                sum += item.price * item.num
            }
        })
        return (
            <div className="Cat">
                <Header title={"购物车"} back></Header>


                {
                    list.map((item, index) => {
                        return (
                            <div className="item" key={item.id}>
                                <div className="icon"><img src={item.checked ? radio_hig : radio_nor} alt="" onClick={() => this.select(index)} /></div>
                                <img className="pic" src={item.img} alt="" />
                                <div className="con">
                                    <p className="title">{item.goodsname}</p>
                                    <div className="btn-Box">
                                        <span className="add" onClick={() => this.editAdd(item.id)}>+</span>
                                        <span className="num">{item.num}</span>
                                        <span className="sub" onClick={() => this.editSub(item.id, item.num)}>-</span>
                                    </div>
                                    <p className="AllPrice">总价：￥{item.num * item.price}</p>
                                </div>
                                <p className="price">￥{item.price}</p>
                                <div className={isEdit ? "btns del" : "btns"} onClick={() => this.Del(item.id)}>删除</div>
                            </div>
                        )
                    })
                }
                <div className="footer">
                    <div className="edit">
                        <p onClick={() => this.checkAll()}>
                            <img src={isAll ? radio_hig : radio_nor} alt="" />
                            <span>全选</span>
                        </p>
                        <p onClick={() => this.edit()}>
                            <img src={isEdit ? edit_hig : edit_nor} alt="" />
                            <span>编辑</span>
                        </p>
                        <p className="allPrice">合计：{filtersPrice(sum)}</p>
                    </div>
                    <div className="btns">
                        去结算
                    </div>
                </div>
            </div>
        )
    }
}
