import { Container } from '@/aliases'
import Batch from '@/util/batch'

/**
 * TODO
 *
 * - Hooks for in between waves, the end, etc.
 * - Support for backgrounds, decor, etc.
 * - Support for correctly z-ordering sprites and perhaps reordering them later?
 * - Support for $interactables, or interactable decor items?
 */

/**
 * @Template
 * Stage template with waves, behavior, hooks, etc.
 */
export default class Stage extends Container {
  /**
   * @option {Class[]}  spriteClasses - Array of Sprite classes used at any point in the stage.
   * @option {Object}   waves         - Object that follows the waves spec in @/stage/spec.js
   * @option {Object}   decor         - Object that follows the decor spec in @/stage/spec.js
   * @option {Resource} background    - Sprite image to be used as the background.
   */
  static $spriteClasses = []
  static $waves = null
  static $decor = null
  static $background = null

  constructor () {
    super()
    console.log('Stage ' + this.constructor.name + ' running...')
    this.$hook_init()
    console.log('+ ' + this.constructor.name + ' init')
  }

  $hook_init () {
    console.warn(this.constructor.name + ' does not have hook_init() defined.')
    return null
  }
}
