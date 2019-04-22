import Batch from '@/util/batch'

export default class StageLoader {
  /**
   * @param  {Class} stage - Class of stage to be loaded.
   * @return {Stage}       - Returns a new instance of the stage loaded.
   */
  constructor (stage) {
    console.log('Stage loader for ' + stage.name + ' running...')
    // Return a new instance of the stage in the callback.
    return new Batch(stage.$spriteClasses).run(batch => {
      console.log('Stage loader for ' + stage.name + ' finished.')
      // For loading any other stages.
      return new stage()
    })
  }
}
