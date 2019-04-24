import Resource from '@/util/resource'

export default class ResourceAnimated extends Resource {
  /**
   * @param {String} sheet - See Resource.
   * @param {String} d     - Default animation for the sprite.
   */
  constructor (sheet, d) {
    super(sheet, d, true)
  }
}
