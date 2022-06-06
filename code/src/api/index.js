import axios from 'axios';
//获取轮播图api，0为pc，1位android
// let baseUrl="http://localhost:3000/api"
let baseUrl="/api"
export function getBanner(){
    return axios.get(`${baseUrl}/api/banner`)
}
export function getLogin(username,pass){
    return axios.get(`${baseUrl}/api/login?${username}&${pass}`)
}
export function getUser(id){
    return axios.get(`${baseUrl}/api/user?${id}`)
}
export function getRegister(username,pass,pass2){
    return axios.get(`${baseUrl}/api/register?${username}&${pass}&${pass2}`)
}
export function getOrder(user_id){
    return axios.get(`${baseUrl}/api/order?${user_id}`)
}
export default{
    getBanner,getLogin,getUser,getRegister,getOrder
}