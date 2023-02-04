import { Random } from 'mockjs'
import {MockMethod} from 'vite-plugin-mock'

export default [
  {
    url:"/api/info",
    method:'get',
    response:()=>{
      return{
        code:200,
        message:"请求成功",
        status:"success",
        data:{
          name:"周杰伦",
          age:19,
          avatar:"/images/zjl.jpg",
          permissions:['editor_markdown','article_edit']
        }
      }
    }
  },
  {
    url:"/api/login",
    method:'post',
    response:()=>{
      return{
        code:200,
        message:"登录成功",
        status:"success",
        data:{
          token:Random.string(10)
        }
      }
    }
  }
] as MockMethod[]