import boss from "../canvas/boss";
import { image } from "../service/image";
import modelAbstract from "./modelAbstarct";

export default class  extends modelAbstract implements IModel{
  public canvas: ICanvas = boss
  name: string = 'boss'
  image(): HTMLImageElement {
    return image.get('boss')!
  }
  render(): void {
    super.draw()
  }
}