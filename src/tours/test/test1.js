import Stage from '@/stage'
import TestSprite from '@/tours/test/test_sprite'
import { app } from '@'
import * as PIXI from 'pixi.js'

export default class TestStage1 extends Stage {
  static $spriteClasses = []
  static $waves = null
  static $decor = null

  $hook_init () {
    let testSprite = new PIXI.Graphics()
    testSprite.beginFill(0xFFFF00)
    testSprite.lineStyle(5, 0xFF0000)
    testSprite.drawRect(50, 50, 50, 50)
    app.stage.addChild(testSprite)
  }
}
