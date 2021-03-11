import axios from "./axios"
import qs from "qs"
let url1 = "http://admin.anypay9.com/"
let url2 = "https://anypayimage.oss-cn-beijing.aliyuncs.com/marioNotice.txt"
let url3 = "https://anypayimage.oss-cn-beijing.aliyuncs.com/marioAbout.txt"
// let url4 = "http://47.241.104.148:8088/"
// let url1 = "https://api-cn.etherscan.com/"
let url4 = "http://192.168.2.183:8081/"

let indexAPI = {
    // 用户管理page
    apiUserManagePage: () => {
        return axios({
            url: url4 + "admin/getAll",
            method: "get"
        })
    },
    // 员工查询
    apiUserManageById: () => {
        return axios({
            url: url4 + "admin/getById",
            method: "get"
        })
    },
    // getSts: (data) => {
    //     return axios({
    //         url: url1 + data,
    //         method: "post"
    //         // headers: { token: window.localStorage.getItem("token") }
    //     })
    // },
    // init: () => {
    //     return axios({
    //         url: url2,
    //         method: "get"
    //         // headers: { token: window.localStorage.getItem("token") }
    //     })
    // },
    // init2: () => {
    //     return axios({
    //         url: url3,
    //         method: "get"
    //         // headers: { token: window.localStorage.getItem("token") }
    //     })
    // },
    // getInit: (data) => {
    //     return axios({
    //         url: url4 + "update/selectExchange",
    //         // url: url4 + data,
    //         method: "post",
    //         // headers: {
    //         //     "Content-Type":"application/x-www-form-urlencoded"
    //         // }
    //         // headers: { token: window.localStorage.getItem("token") }
    //     })
    // },
    // count: (data) => {
    //     return axios({
    //         url: url4 + "update/selectUsdtAll",
    //         method: "post",
    //     })
    // },
    // getInitUser: (data) => {
    //     return axios({
    //         url: url4 + "update/selectPatnerZt",
    //         method: "post",
    //     })
    // },
    // getInitUserAll: (data) => {
    //     return axios({
    //         url: url4 + "update/selectAccountAll",
    //         method: "post",
    //     })
    // },
    // // getInitLh: (data) => {
    // //     return axios({
    // //         url: url4 + "index/selectSubtitle",
    // //         method: "post",
    // //     })
    // // },
    // getSelectSubtitleData:(data)=>{
    //     return axios({
    //         url: url4 + "update/selectSubtitle",
    //         method: "post",
    //     })
    // },
    // getInitLianghua: (data) => {
    //     return axios({
    //         url: url4 + "update/selectWealth",
    //         method: "post",
    //     })
    // },
    // // 新增理财产品
    // insertWealthUpdate: (data) => {
    //     return axios({
    //         url: url4 + "update/insertWealth",
    //         method: "post",
    //         params: data
    //     })
    // },
    // //所有用户理财产品展示
    // fetchAllWealth: () => {
    //     return axios({
    //         url: url4 + "update/selectWealthAll",
    //         method: "post",
    //     })
    // },
    // //删除理财菜品deleteWealthById
    // apiDeleteWealth: (data) => {
    //     return axios({
    //         url: url4 + "update/deleteWealthById",
    //         method: "post",
    //         params: data
    //     })
    // },   
    // //闪兑记录展示
    // apiFetchExchangeTail: (data) => {
    //     return axios({
    //         url: url4 + "update/selectExchangeTail",
    //         method: "post",
    //     })
    // },
    // getInitCheck: (data) => {
    //     return axios({
    //         url: url4 + "update/selectTiquzt",
    //         method: "post",
    //     })
    // },
    // in: (data) => {
    //     return axios({
    //         url: url4 + "update/selectRollIn",
    //         method: "post",
    //     })
    // },
    // out: (data) => {
    //     return axios({
    //         url: url4 + "update/selectRollout",
    //         method: "post",
    //     })
    // },
    // edit1: (data) => {
    //     return axios({
    //         url: url4 + "update/updateMinmoney",
    //         method: "post",
    //         params: data
    //     })
    // },
    // edit2: (data) => {
    //     return axios({
    //         url: url4 + "update/updateExchange",
    //         method: "post",
    //         params: data
    //     })
    // },
    // edit3: (data) => {
    //     return axios({
    //         url: url4 + "update/updateService",
    //         method: "post",
    //         params: data
    //     })
    // },
    // // 提成比例
    // edit4: (data) => {
    //     return axios({
    //         url: url4 + "update/updatePartnerLilv",
    //         method: "post",
    //         params: data,
    //         // type: "json",
    //     })
    // },
    // // 合伙人状态
    // edit5: (data) => {
    //     return axios({
    //         url: url4 + "update/updatePartnerZt",
    //         method: "post",
    //         params: data
    //     })
    // },
    // edit6: (data) => {
    //     return axios({
    //         url: url4 + "update/updateSubtitle",
    //         method: "post",
    //         params: data
    //     })
    // },
    //     // 量化分红周期修改
    // edit7: (data) => {
    //     return axios({
    //         url: url4 + "update/updateWealthByMonth",
    //         method: "post",
    //         params: data
    //     })
    // }, 
    // edit8: (data) => {
    //     return axios({
    //         url: url4 + "update/updateWealth",
    //         method: "post",
    //         params: data
    //     })
    // },

    // edit9: (data) => {
    //     return axios({
    //         url: url4 + "update/updateMyWealth",
    //         method: "post",
    //         params: data
    //     })
    // },
    //     // 量化年利率修改
    // edit10: (data) => {
    //     return axios({
    //         url: url4 + "update/updateWealthByYear",
    //         method: "post",
    //         params: data
    //     })
    // },
    // // 量化产品状态修改
    // edit11: (data) => {
    //     return axios({
    //         url: url4 + "update/updateWealthByZt",
    //         method: "post",
    //         params: data
    //     })
    // },
    // //邀请奖励金额
    // edit12: (data) => {
    //     return axios({
    //         url: url4 + "update/updatePartnerAdd",
    //         method: "post",
    //         params: data
    //     })
    // },
    // login: (data) => {
    //     return axios({
    //         url: url4 + "register/login",
    //         method: "post",
    //         params: data,
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded"
    //         }
    //         // headers: { token: window.localStorage.getItem("token") }
    //     })
    // }
}

export default indexAPI