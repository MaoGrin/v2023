import axios, { AxiosRequestConfig } from "axios";
export default class Axios {
  private instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.interceptors();
  }
  // 请求
  public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig):Promise<D>{
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config);
        resolve(response.data)
      } catch (e) {
        reject(e)
      }
    });
  }

  // 拦截器
  private interceptors() {
    // 请求拦截器
    this.interceptorsRequest();
    // 响应拦截器
    this.interceptorsResponse();
  }
  // 请求拦截器
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  // 响应拦截器
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
