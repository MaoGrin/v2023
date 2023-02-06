/*
 * @Author: 芝麻糊 
 * @Date: 2023-02-05 10:41:03 
 * @Last Modified by: 芝麻糊
 * @Last Modified time: 2023-02-05 12:45:37
 */

import canvasAbstract from "./canvasAbstract";
import model from '../model/bullet'
import tank from "./tank";
import bullet from "../model/bullet";
import play from "./play";
import audio from "../service/audio";
// 绘制水

export default new (class extends canvasAbstract implements ICanvas {
  intervalId=0
  num(): number {
    return 0
  }
  model(): BulletModelConstructor {
    return model
  }
  render(): void {
    this.intervalId = setInterval(()=>{
      this.createBullet()
      this.renderModels()
    },30)
  }
  stop(): void {
    clearInterval(this.intervalId)
  }
  createBullet(){
    tank.models.forEach(tank=>{
      const isExists = this.models.some(m=>m.tank==tank)
      if(!isExists){
        this.models.push(new bullet(tank))
    audio.fire()

      }
    })
  }

  addPlayBullet(){
    this.models.push(new bullet(play.models[0]))
    audio.fire()
  }


})('bullet')

