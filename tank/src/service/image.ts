/*
 * @Author: 芝麻糊 
 * @Date: 2023-02-05 11:08:57 
 * @Last Modified by: 芝麻糊
 * @Last Modified time: 2023-02-05 11:41:07
 */

import config from "../config"

// 声明类型
type mapKey = keyof typeof config.images
export const image = new Map<mapKey,HTMLImageElement>()
// 生成可迭代的对象并且遍历
export const promises = Object.entries(config.images).map(([key,value])=>{
  // 返回一个新的promise
  return new Promise(resolve=>{
    // 创建图片元素
    const img = document.createElement('img')
    // 设置图片路径
    img.src = value
    // 加载图片
    img.onload = () =>{
      // 映射图片到Map集合中
      image.set(key as mapKey,img)
      // 返回图片
      resolve(img)
    }
  })
})