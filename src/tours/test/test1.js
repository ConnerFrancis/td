import Stage from '@/stage'
import TestSprite from '@/tours/test/test_sprite'

export default class TestStage1 extends Stage {
  static $spriteClasses = [TestSprite]
  static $waves = []
  static $decor = [
    [50, 50, TestSprite]
  ]
}
