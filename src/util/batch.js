import { loader } from '@/aliases'

/** A Batch based Resource loader. */
export default class Batch {
  sprites
  /** Basically forces the instantiation of a Batch. */
  loader = null
  /** Used to store sheets already added during runtime. */
  sheets = null

  /**
   * @param {Array}     sprites   - Array of static/animated sprites.
   * @param {Container} container - Valid PIXI container.
   */
  constructor (sprites) {
    this.sprites = sprites

    this.loader = loader
    console.log('New batch created.')
  }

  /** Format the sprites. */
  run (callback = () => { console.warn('No Batch callback provided.') }) {
    // Make sheets[] an array to be used in Resource.prepare().
    this.sheets = []
    this.sprites.forEach(s => s.$resource().prepare(this))
    // Load them.
    return this.loader.load(callback(this))
  }
}
