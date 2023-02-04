import { Random } from 'mockjs'
import {MockMethod} from 'vite-plugin-mock'

export default [
  {
    url:"/api/upload/image",
    method:'post',
    response:()=>{
      return{
        code:200,
        message:"上传成功",
        status:"success",
        errno:0,
        data:{
          url:"/images/zjl.jpg",
        }
      }
    }
  },

] as MockMethod[]