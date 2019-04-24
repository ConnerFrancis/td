import { app } from '@'
import Batch from '@/util/batch'

export default class StageLoader {
  /**
   * @param  {Class} stage - Class of stage to be loaded.
   * @return {Stage}       - Returns a new instance of the stage loaded.
   */
  constructor (stage) {
    console.log('Stage loader for ' + stage.name + ' running...')
    // Run a resource batch...
    return new Batch(stage.$spriteClasses).run(batch => {
      console.log('Stage loader for ' + stage.name + ' finished.')
      // Make a new instance...
      let instance = new stage()
      // Add it to the root stage...
      app.stage.addChild(instance)
      // Return the instance.
      return instance
    })
  }
}
