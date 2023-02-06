/*
 * @Author: 芝麻糊
 * @Date: 2023-02-05 10:41:03
 * @Last Modified by: 芝麻糊
 * @Last Modified time: 2023-02-05 12:45:37
 */

import canvasAbstract from "./canvasAbstract";
import model from "../model/boss";
import config from "../config";
// 绘制boss

export default new (class extends canvasAbstract implements ICanvas {
  num(): number {
    return 0;
  }
  model(): ModelConstructor {
    return model;
  }
  render(): void {
    this.createModels();
    this.renderModels();
  }
  // 创建模型实例
  protected createModels() {
    // 循环创建草地模型
    [{ x: config.canvas.width / 2, y: config.canvas.height - config.model.height }].forEach(
      (position) => {
        const model = this.model() as ModelConstructor;
        const instance = new model(position.x, position.y);
        this.models.push(instance);
      }
    );
  }
})("boss");
