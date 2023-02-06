/*
 * @Author: 芝麻糊 
 * @Date: 2023-02-05 10:41:03 
 * @Last Modified by: 芝麻糊
 * @Last Modified time: 2023-02-05 12:45:37
 */

import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from '../model/water'

// 绘制水

class water extends canvasAbstract implements ICanvas {
  num(): number {
    return config.water.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new water('water')
