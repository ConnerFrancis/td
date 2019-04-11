import Stage from '@/stage'
import TestSprite from '@/tours/test/test_sprite'

export default class TestStage1 extends Stage {
  $spriteClasses = [TestSprite]
  $waves = [
    {
      enemies: [
        [[1, TestSprite]]
      ]
    }
  ]
}