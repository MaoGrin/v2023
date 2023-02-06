/*
 * @Author: 芝麻糊 
 * @Date: 2023-02-05 10:41:03 
 * @Last Modified by: 芝麻糊
 * @Last Modified time: 2023-02-05 12:45:37
 */

import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from '../model/wall'

// 绘制墙体

class wall extends canvasAbstract implements ICanvas {
  num(): number {
    return config.wall.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    this.createBossWall()
    super.renderModels()
  }
  createBossWall(){
    const cw = config.canvas.width
    const ch = config.canvas.height
    const mw = config.model.width
    const mh = config.model.height
    const pos = [
      {x:cw/2 - mw * 2, y:ch - mh},
      {x:cw/2 - mw * 2,y:ch - mh * 2},
      {x:cw/2 - mw * 2,y:ch - mh * 3},
      {x:cw/2 - mw,y:ch - mh * 3},
      {x:cw/2,y:ch - mh * 3},
      {x:cw/2 + mw,y:ch - mh * 3},
      {x:cw/2 + mw * 2,y:ch - mh * 3},
      {x:cw/2 + mw * 2,y:ch - mh * 3},
      {x:cw/2 + mw * 2,y:ch - mh * 2},
      {x:cw/2 + mw * 2,y:ch - mh },
    
    ]
    pos.forEach(position=>{
      const model = this.model() as ModelConstructor
      const instance = new model( position.x, position.y);
      this.models.push(instance);
    })
  }
}

export default new wall('wall')
