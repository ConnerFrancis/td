import * as PIXI from 'pixi.js'
import StageLoader from '@/stage/loader'
import TestStage1 from '@/tours/test/test1'

export const app = new PIXI.Application({
  width: 1024,
  height: 576,
  antialiasing: true,
  transparent: false,
  resolution: 1
})

const setup = () => {
  // Setup the app
  let frame = document.getElementById('frame')

  /** Custom logger that basically just mirrors the developer console of the browser. */
  const log = document.getElementById('log')
  var count = 0
  // 4/9/19: On this day I discovered that if you are using Standard and your linter is broken,
  //         ALWAYS check for semicolon discrepencies such as placing them before an anonymous array :)
  ;['log', 'debug', 'warn', 'error', 'info'].forEach((verb) => {
    window.console[verb] = (function (method, verb, log) {
      return function () {
        /* 1: Apply old console method.
         * 2: Create a new node to display the info.
         * 3: Make sure the class of the type is applied.
         * 4: Add a label in the node for the type.
         * 5: Put the data passed to the original method in the node.
         * 6: Show the new node.
         * 7: Set the scrollbar to the bottom of the logger.
         * 8: Increase the count for labeling purposes.
         */
        /* [1] */
        method.apply(window.console, arguments)
        /* [2] */
        let node = document.createElement('span')
        /* [3] */
        node.classList.add(verb)
        /* [4] */
        let nodeLabel = document.createElement('code')
        nodeLabel.textContent = count + ' '
        node.appendChild(nodeLabel)
        /* [5] */
        let nodeContent = document.createElement('code')
        nodeContent.textContent = Array.prototype.slice.call(arguments).join(' ')
        node.appendChild(nodeContent)
        /* [6] */
        log.appendChild(node)
        /* [7] */
        log.scrollTop = log.scrollHeight
        /* [8] */
        count++
      }
    })(window.console[verb], verb, log)
  })
  window.console.debug('Console loaded.')

  // Load the app
  frame.appendChild(app.view)
  app.view.id = 'c'
  // Load the menu
  testStage = new StageLoader(TestStage1)
}

/** Maximize safety by waiting on the document. */
if (document.readyState !== 'loading') {
  setup()
  console.info('DOMContentLoaded listener not necessary.')
} else {
  document.addEventListener('DOMContentLoaded', () => {
    setup()
    console.info('DOMContentLoaded listener used.')
  })
}
