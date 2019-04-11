import Batch from '@/util/batch'

/** Formatting class for Sprite resources. */
export default class Resource {
  sheet
  image
  animated

  /**
   * @param {String}  sheet    - JSON sprite sheet.
   * @param {String}  image    - Image in the sprite sheet.
   * @param {Boolean} animated - Is the resource animated?
   */
  constructor (sheet, image, animated = false) {
    this.sheet = sheet + '.json'
    this.image = image + '.png'
    this.animated = animated
  }

  /**
   * Add the asset to the loader.
   *
   * @param {Batch} batch - Valid resource Batch.
   */
  prepare (batch) {
    // Warn if the batch passed is not one.
    if (!(batch instanceof Batch)) console.warn('Resource attempting to load from a non-batch object!')
    // Make sure we're not loading duplicate sprite sheets.
    if (batch.sheets.includes(this.sheet)) return

    // Add to the loader...
    batch.loader.add('assets/' + this.sheet)
    // ...and prevent duplicates. 
    batch.sheets.push(this.sheet)
  }
}
