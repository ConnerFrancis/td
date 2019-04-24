import Stage from '@/stage'
import TestSprite from '@/tours/test/test_sprite'
import Player from '@/player'
import * as PIXI from 'pixi.js'

export default class TestStage1 extends Stage {
  static $spriteClasses = [TestSprite, Player]
  static $waves = null
  static $decor = null

  $hook_init () {
    this.addChild(new TestSprite(0, 0))
    this.addChild(new TestSprite(10, 0))
    this.addChild(new TestSprite(0, 8))
    this.addChild(new TestSprite(8 ,8))
    this.addChild(new TestSprite(11,2))
    this.addChild(new TestSprite(15, 9))

    this.addChild(new Player(32, 32))
  }
}
