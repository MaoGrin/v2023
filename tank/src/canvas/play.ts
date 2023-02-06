/*
 * @Author: 芝麻糊
 * @Date: 2023-02-05 10:41:03
 * @Last Modified by: 芝麻糊
 * @Last Modified time: 2023-02-05 12:45:37
 */

import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/play";
// 绘制坦克

class tank extends canvasAbstract {
  num(): number {
    return config.tank.num;
  }
  model(): ModelConstructor {
    return model;
  }
  render(): void {
    this.createModels();
    super.renderModels();

    setInterval(() => this.renderModels(), config.timeout);
  }
  // 渲染模型
  public renderModels() {
    // 擦除画布
    super.renderModels()
  }

  // 创建模型实例
  protected createModels() {
    const cw = config.canvas.width
    const ch = config.canvas.height
    const mw = config.model.width
    const mh = config.model.height

    ;[{x:cw/2 + mw*4,y:ch - mh}].forEach((position) => {
      const model = this.model() as ModelConstructor
      const instance = new model( position.x, position.y);
      this.models.push(instance);
    });
  }
}

export default new tank('play');
