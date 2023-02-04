// 工具函数 --- 存储token信息

// 声明存储的数据类型
export interface IData {
  data: any;
  expire?: number;
}

export default {
  /**
   * 增加本地存储
   * @param key 本地存储的键值
   * @param data 本地存储的主要数据
   * @param expire 本地存储的过期时间
   */
  set(key: string, data: any, expire?: number): void {
    // 获取需要存储的数据
    let cache: IData = { data };
    // 判断是否传递过期时间
    if (expire) {
      // 设置过期时间
      cache.expire = new Date().getTime() + data.expire * 1000;
    }
    // 存储到本地存储中
    localStorage.setItem(key, JSON.stringify(cache));
  },
  /**
   * 获取本地存储
   * @param key 获取存储的键值
   * @returns 
   */
  get(key: string): any {
    // 获取到存储在本地的数据
    const cacheStore = localStorage.getItem(key);
    // 判断是否存在
    if (cacheStore) {
      // 对获取到的数据进行格式化
      const cache = JSON.parse(cacheStore);
      // 获取过期时间
      const expire = cache?.expire;
      // 判断时间是否过期
      if (expire && expire < new Date().getTime()) {
        // 移除存储的键值
        localStorage.removeItem(key);
        // 返回空置
        return null;
      }
      // 没过期，返回数据
      return cache.data;
    }
    // 不存在直接返回空
    return null;
  },
  /**
   * 移除本地存储的信息
   * @param key 本地存储的键
   */
  remove(key: string) {
    // 移除本地存储的键值
    localStorage.removeItem(key);
  },
};
