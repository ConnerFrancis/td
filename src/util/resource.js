import Batch from '@/util/batch'

/** Formatting class for Sprite resources. */
export default class Resource {
  sheet
  image
  animated

  /**
   * @param {String}  sheet           - JSON sprite sheet.
   * @param {String}  image           - Image in the sprite sheet.
   * @param {Boolean} extra.animated  - Is the resource animated?
   * @param {Boolean} extra.fromImage - Is the resource from an image rather than a sprite sheet?
   */
  constructor (sheet, image, extra = { animated: false, fromImage: false }) {
    this.sheet = sheet + '/sheet.json'
    this.image = image + '.png'
    this.animated = extra.animated
    this.fromImage = extra.fromImage
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
    console.log('- ' + this.sheet + ' added to the loader.')
    // ...and prevent duplicates. 
    batch.sheets.push(this.sheet)
  }
}
