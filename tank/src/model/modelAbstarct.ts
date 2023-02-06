import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import audio from "../service/audio";

export default abstract class modelAbstract {
   abstract name: string;
  public abstract canvas: ICanvas;
  abstract render(): void;
  abstract image(): HTMLImageElement;
  public direction: directionEnum = directionEnum.top;
  public width: number = config.model.width;
  public height: number = config.model.height;
  constructor(public x: number, public y: number) {
    this.randomDirection();
  }
  // 随机方向
  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[
      Math.floor(Math.random() * 4)
    ] as directionEnum;
  }
  // 绘制容器
  protected draw() {
    this.canvas.ctx.drawImage(
      this.image(),
      this.x,
      this.y,
      config.model.width,
      config.model.height
    );
  }
  // 销毁
  public destroy() {
    this.canvas.removeModel(this);
    this.canvas.renderModels();
  }
  // 爆炸
  protected blast(model: IModel) {
    audio.blast()
    Array(...Array(8).keys()).reduce((promise, index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const img = new Image();
          img.src = `/src/static/images/blasts/blast${index}.gif`;
          img.onload = () => {
            this.canvas.ctx.drawImage(
              img,
              model.x,
              model.y,
              model.width,
              model.height
            );
            resolve(promise);
          };
        }, 100);
      });
    }, Promise.resolve());
  }
}
