import { loader } from '@/aliases'

/** A Batch based Resource loader. */
export default class Batch {
  sprites
  loader = null
  /** Used to store sheets already added during runtime. */
  sheets = []

  /**
   * This constructor is used for preparing sprites and things for the run method.
   * @param {Classp[]} sprites - Array of Sprite classes.
   */
  constructor (sprites) {
    this.sprites = sprites

    this.loader = loader
    console.log('Batch of ' + sprites.length + ' sprite(s) running...')
  }

  /**
   * Actually load the darn things.
   * @return - Used to return any values possibly returned in the callback.
   */
  run (callback = () => { console.warn('No Batch callback provided.') }) {
    this.sprites.forEach(s => s.$resource.prepare(this))
    return this.loader.load((loader, resources) => {
      loader.reset()
      console.log('Batch of ' + this.sprites.length + ' sprite(s) finished.')
      return callback(this)
    })
  }
}
