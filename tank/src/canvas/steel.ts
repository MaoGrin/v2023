/*
 * @Author: 芝麻糊 
 * @Date: 2023-02-05 10:41:03 
 * @Last Modified by: 芝麻糊
 * @Last Modified time: 2023-02-05 12:45:37
 */

import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from '../model/steel'

// 绘制钢铁

class steel extends canvasAbstract implements ICanvas {
  num(): number {
    return config.steel.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new steel('steel')
