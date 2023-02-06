import straw from "../canvas/straw";
import { image } from "../service/image";
import modelAbstract from "./modelAbstarct";

export default class  extends modelAbstract implements IModel{
  public canvas: ICanvas = straw
  name: string = 'straw'
  image(): HTMLImageElement {
    return image.get('straw')!
  }
  render(): void {
    super.draw()
  }
}