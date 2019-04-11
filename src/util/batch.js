import { loader } from '@/aliases'

/** A Batch based Resource loader. */
export default class Batch {
  sprites
  container
  /** Basically forces the instantiation of a Batch. */
  loader = null
  /** Used to store sheets already added during runtime. */
  sheets = null

  /**
   * @param {Array}     sprites   - Array of static/animated sprites.
   * @param {Container} container - Valid PIXI container.
   */
  constructor (sprites, container) {
    this.sprites = sprites
    this.container = container

    this.loader = loader
    console.log('New batch created.')
  }

  /** Format the sprites. */
  run (loadCallback = () => { return null }) {
    // Make sheets[] an array to be used in Resource.prepare().
    this.sheets = []
    this.sprites.forEach(s => s.$resource().prepare(this))
    // Load them.
    this.loader.load(loadCallback)
  }
}
