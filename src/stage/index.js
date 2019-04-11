import { Container } from '@/aliases'
import Batch from '@/util/batch'

/**
 * @Template
 * Stage template with waves, behavior, etc.
 */
// TODO:
// - Add hooks for between waves and things...
//   ... waves format could use hooks in the waves themselves.
// - Add support for backgrounds, decor, etc. This needs a format similar to waves.
// - Add support for re-ordering the z-index of children with swapChildren()
export default class Stage extends Container {
  /** @option {Array} spriteClasses - Array of valid Sprite classes that are used in the waves. */
  $spriteClasses = []
  /** @option {Object} waves - Valid Waves object that follows @/stage/spec.js */
  $waves = null
  /** @option {Object} decor - Valid Decor object that follows @/stage/decor.js */
  $decor = null
  /** @option {Resource} background - Resource to be used as a background to the stage.  */
  $background = null

  batch
  wavesLoaded = []

  /** Prepares things to be used when calling load(). */
  constructor () {
    super()
    this.batch = new Batch(this.$spriteClasses, this)
  }

  /** Load assets, setup entities, etc. */
  // TODO:
  // - Load things in z-order
  // - Make sure dynamic class instance creation works
  load () {
    this.batch.run(() => {
      // Prepare each set in each group of the wave's enemies.
      this.$waves.forEach(wave => wave.enemies.forEach(enemyGroup => enemyGroup.forEach(enemySet => {
        // Use the count of how many enemies of said type there are...
        for (let i = 0; i < enemySet[0]; i++) {
          // ... and spawn an enemy in for the count of how many there are.
          new enemySet[1]()
        }
      })))
    })
  }
}
