import * as PIXI from 'pixi.js'
import Resource from '@/util/resource'

/** @Template */
export default class SpriteStatic extends PIXI.Sprite {
  /** @option {Resource} resource() - Returns a Resource object acting as the Sprite's... sprite. */
  static $resource () {
    return new Resource('misc', 'missing')
  }
}
