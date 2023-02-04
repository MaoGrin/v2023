import axios from "axios";
import {nextTick} from 'vue'
import {
  ElMessage, ElLoading
} from 'element-plus'
import {
  useRouter
} from 'vue-router'
// 获取路由
const router = useRouter()

export function request(config) {
  // 获取加载动画
  const loading = ElLoading.service({
    fullscreen: true,
    lock: true,
    text: '在下为您努力拼搏中...',
    background: 'rgba(0,0,0,.7)',

  })
  const instance = new axios.create({
    baseURL: 'http://127.0.0.1:7001/api/v1',
    timeout: 5000,
  });
  setTimeout(()=>{
    // 请求拦截器
    instance.interceptors.request.use(
      config => {
        //拦截后需要将拦截下来的请求数据返回发
        return config
      },
      err => {
        if (err) {
          ElMessage.error("网络错误,请重试!");
        }
      }
    );

    // 相应拦截器
    instance.interceptors.response.use(
      res => {
        // 拦截后需要将拦截下来处理成的结果返回
        return res.data;
      },
      err => {
        // 关闭加载
        return ElMessage.error("网络错误,请重试!");
      }
    );
  },1500)
  // 关闭加载
  loading.close()

  return instance(config);
}
