import * as PIXI from 'pixi.js'
import Resource from '@/util/resource'
import { resources } from '@/aliases'

/** @Template */
export default class SpriteStatic extends PIXI.Sprite {
  /**
   * @option {Resource} resource - Returns a Resource object acting as the Sprite's... sprite.
   */
  static $resource = new Resource('misc', 'missing')

  constructor () {
    // Automagically get the correct asset.
    super(resources['assets/' + this.$resource.sheet].textures[this.$resource.image])
  }
}
