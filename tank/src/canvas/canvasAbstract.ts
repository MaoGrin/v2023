/*
 * @Author: 芝麻糊
 * @Date: 2023-02-05 10:52:09
 * @Last Modified by: 芝麻糊
 * @Last Modified time: 2023-02-05 12:45:18
 */

import config from "../config";
import position from "../service/position";
// 画布父类

export default abstract class canvasAbstract{
  public models: IModel[] = [];
  abstract num(): number;
  abstract model(): ModelConstructor  | BulletModelConstructor;
  abstract render(): void;
  constructor(
    protected name:string,
    protected app = document.querySelector("#app") as HTMLDivElement,
    protected el = document.createElement("canvas"),
    public ctx = el.getContext("2d")!
  ) {
    this.createCanvas();
  }
  // 创建画布
  protected createCanvas() {
    // 定义画布的宽高
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.el.setAttribute('name',this.name)
    // 将画布添加到主容器中
    this.app.appendChild(this.el)
  }

  // 创建模型实例
  protected createModels() {
    // 循环创建草地模型
    position.getCollection(this.num()).forEach((position) => {
      const model = this.model() as ModelConstructor
      const instance = new model( position.x, position.y);
      this.models.push(instance);
    });
  }
  // 渲染模型
  public renderModels() {
    this.ctx.clearRect(0,0,config.canvas.width,config.canvas.height)
    this.models.forEach((model) => model.render());
  }
  // 移除画布
  public removeModel(model:IModel){
    this.models = this.models.filter(m=> m != model)
  }
}
