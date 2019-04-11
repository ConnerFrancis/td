import Batch from '@/util/batch'

export default class StageLoader {
  /**
   * @return {Stage} stage - Returns a new instance of the stage loaded.
   */
  constructor (stage) {
    console.log('Stage loader for ' + stage.constructor.name + ' running...')
    return new Batch(stage.$spriteClasses).run(batch => {
      return new stage()
    })
  }
}