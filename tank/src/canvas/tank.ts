/*
 * @Author: 芝麻糊
 * @Date: 2023-02-05 10:41:03
 * @Last Modified by: 芝麻糊
 * @Last Modified time: 2023-02-05 12:45:37
 */

import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/tank";
import position from "../service/position";
// 绘制坦克

class tank extends canvasAbstract {
  intervalId=0
  num(): number {
    return config.tank.num;
  }
  model(): ModelConstructor {
    return model;
  }
  render(): void {
    this.createModels();
    super.renderModels();

    this.intervalId =  setInterval(() => this.renderModels(), config.timeout);
  }
  stop(){
    clearInterval(this.intervalId)
  }
  // 渲染模型
  public renderModels() {
    // 擦除画布
    this.ctx.clearRect(0,0,config.canvas.width,config.canvas.height)
    super.renderModels()
  }

  // 创建模型实例
  protected createModels() {
    for (let i = 0; i < this.num(); i++) {
      // 循环创建草地模型
      const pos = position.position();
      const model = this.model();
      const instance = new model( pos.x, 0);
      this.models.push(instance);
    }
  }
}

export default new tank('tank');
