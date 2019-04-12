import SpriteStatic from '@/sprite/static'
import Resource from '@/util/resource'

export default class TestSprite extends SpriteStatic {
  static $resource = new Resource('misc', 'missing')
}
