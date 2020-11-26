import axios from "axios"
import qs from "qs"

axios.interceptors.response.use(res=>{

    console.log(res)

    return res
})

export const reqHomeList = ()=>{//Home列表请求
    return axios({
        url:"/api/getindexgoods",
        method:"GET"
    })
}

export const reqDetail = (id)=>{//Detail列表请求
    return axios({
        url:"/api/getgoodsinfo",
        method:"GET",
        params:{id}
    })
}

export const reqLogin = (user)=>{//登陆请求
    return axios({
        url:"/api/login",
        method:"POST",
        data:qs.stringify(user)
    })
}

export const reqRegister = (user)=>{//注册请求
    return axios({
        url:"/api/register",
        method:"POST",
        data:qs.stringify(user)
    })
}


export const reqCateList = (user)=>{//分类列表请求
    return axios({
        url:"/api/getcatetree",
        method:"GET",
       
    })
}

export const reqGoodsList = (fid)=>{//分类详情

    return axios({
        url:"/api/getgoods",
        method:"GET",
        params:fid
       
    })
}

export const reqCartAdd = (info)=>{//购物车添加

    return axios({
        url:"/api/cartadd",
        method:"POST",
        data:qs.stringify(info)
       
    })
}





