// 摆放位置

import config from "../config";
type positionType = {x:number,y:number}
class position{
  collection:positionType[] = []
   // 随机摆放集合
   public getCollection(num:number){
    const collection = [] as {x:number,y:number}[]
    for(let i = 0; i < num; i++) {
      while(true){
        const position = this.position()
        const exits = this.collection.some(c=>c.x == position.x && c.y == position.y)
        if(!exits){
          collection.push(position)
          this.collection.push(position)
          break;
        }
      }
    }
    return collection
  }
  // 摆放位置
  public position(){
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y:
        Math.floor(Math.random() * (config.canvas.height / config.model.height - 5)) * config.model.height +
        config.model.height * 2,
    }
  }
}

export default new position()