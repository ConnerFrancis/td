import SpriteStatic from '@/sprite/static'
import Resource from '@/util/resource'

export default class TestSprite extends SpriteStatic {
  static $resource () {
    return new Resource('misc', 'missing')
  }
}
