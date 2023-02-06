// 1.引入封装好的请求体
import { request } from './request.js'
import {toRaw} from 'vue'
// 2.到处请求的函数
/**
 *
 * @description 登录表单
 * @param loginForm
 */
export function apiLogin(loginForm){
  // 转换为普通形式
  loginForm = toRaw(loginForm)
  // 1.判断是否有特定key值
  // 如果传递的参数没有username和password,返回错误
  if(!('username' in loginForm) && ('password' in loginForm) ) return  false
  // 2.开始请求
  return request({
    url:"/user/login",
    params:loginForm,
    method:'get'
  })
}
/**
 *
 * @description 注册表单
 * @param registerForm
 */
export function apiRegister(registerForm){
  // 转换为普通形式
  registerForm = toRaw(registerForm)
  // 1.判断是否有特定key值
  // 如果传递的参数没有username和password、phone,返回错误
  if(!(('username' in registerForm) && ('password' in registerForm) && ('phone' in registerForm)) ) return  false
  // 2.开始请求
  return request({
    url:"/user/create",
    data:registerForm,
    method:'post'
  })
}
