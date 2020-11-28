import axios from "axios"
import qs from "qs"
import { successAlert } from "./alert"

axios.interceptors.response.use(res => {

    console.log(res)

    if (res.data.code !== 200) {
        successAlert(res.data.msg)
    }

    if (res.data.msg === "登录已过期或访问权限受限") {
        localStorage.removeItem("userInfo")
        window.location.href = "/login"
    }

    return res
})

axios.interceptors.request.use(req => {

    // console.log  (req);
    if (req.url !== "/api/login" && req.url !== "/api/register") {
        req.headers.authorization = JSON.parse(localStorage.getItem("userInfo")).token
    }   

    return req
})

export const reqHomeList = () => {//Home列表请求
    return axios({
        url: "/api/getindexgoods",
        method: "GET"
    })
}

//首页商品banner
export const reqHomeBanner = () => {
    return axios({
        url: "/api/getbanner",
        method: "get"
    })
}

export const reqDetail = (id) => {//Detail列表请求
    return axios({
        url: "/api/getgoodsinfo",
        method: "GET",
        params: { id }
    })
}

export const reqLogin = (user) => {//登陆请求
    return axios({
        url: "/api/login",
        method: "POST",
        data: qs.stringify(user)
    })
}

export const reqRegister = (user) => {//注册请求
    return axios({
        url: "/api/register",
        method: "POST",
        data: qs.stringify(user)
    })
}


export const reqCateList = (user) => {//分类列表请求
    return axios({
        url: "/api/getcatetree",
        method: "GET",

    })
}

export const reqGoodsList = (fid) => {//分类详情

    return axios({
        url: "/api/getgoods",
        method: "GET",
        params: fid

    })
}

export const reqCartAdd = (info) => {//购物车添加

    return axios({
        url: "/api/cartadd",
        method: "POST",
        data: qs.stringify(info)

    })
}

// /api/cartedit

export const reqCartList = (uid) => {//购物车列表

    return axios({
        url: "/api/cartlist",
        method: "GET",
        params: { uid }

    })
}


export const reqCartEdit = (info) => {//购物车列表编辑

    return axios({
        url: "/api/cartedit",
        method: "POST",
        data: qs.stringify(info)

    })
}

// /api/cartdelete
export const reqCartDel = (id) => {//购物车列表删除

    return axios({
        url: "/api/cartdelete",
        method: "POST",
        data: qs.stringify(id)

    })
}
