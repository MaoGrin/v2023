/*
 * @Author: 芝麻糊
 * @Date: 2023-02-05 11:08:26
 * @Last Modified by: 芝麻糊
 * @Last Modified time: 2023-02-05 14:19:49
 */

import straw from "./static/images/straw/straw.png";
import wall from "./static/images/wall/wall.gif";
import water from "./static/images/water/water.gif";
import steel from "./static/images/wall/steels.gif";
import tankTop from "./static/images/tank/top.gif";
import tankRight from "./static/images/tank/right.gif";
import tankBottom from "./static/images/tank/bottom.gif";
import tankLeft from "./static/images/tank/left.gif";
import bullet from "./static/images/bullet/bullet.jpg";
import boss from "./static/images/boss/boss.png";
import playTop from "./static/images/player/top.gif";
import playRight from "./static/images/player/right.gif";
import playBottom from "./static/images/player/bottom.gif";
import playLeft from "./static/images/player/left.gif";
export default {
  timeout: 100,
  canvas: {
    width: 900,
    height: 600,
  },
  model: {
    width: 30,
    height: 30,
  },
  straw: {
    num: 200,
  },
  wall: {
    num: 100,
  },
  water: {
    num: 60,
  },
  steel: {
    num: 10,
  },
  tank: {
    num: 10,
  },
  images: {
    straw,
    wall,
    water,
    steel,
    tankTop,
    tankRight,
    tankBottom,
    tankLeft,
    bullet,
    boss,
    playTop,
    playRight,
    playBottom,
    playLeft,
  },
};
