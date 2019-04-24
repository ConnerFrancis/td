import * as PIXI from 'pixi.js'
import ResourceAnimated from '@/util/resource_animated'
import { resources } from '@/aliases'
import { app } from '@'

export default class SpriteAnimated extends PIXI.AnimatedSprite {
  /**
   * @option {Resource} resource - Valid resource object, obviously preferred to be set to animated.
   */
  static $resource = new ResourceAnimated('misc', 'missing_animated')

  constructor (x, y) {
    super(resources['assets/' + SpriteAnimated.$resource.sheet].spritesheet.animations['image_sequence'])
  }
}
