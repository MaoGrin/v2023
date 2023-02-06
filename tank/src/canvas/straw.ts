/*
 * @Author: 芝麻糊 
 * @Date: 2023-02-05 10:41:03 
 * @Last Modified by: 芝麻糊
 * @Last Modified time: 2023-02-05 12:45:37
 */

import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from '../model/straw'

// 绘制草地

class straw extends canvasAbstract  {
  num(): number {
    return config.straw.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new straw('straw')
