import SpriteAnimated from '@/sprite/animated'
import ResourceAnimated from '@/util/resource_animated'

export default class Player extends SpriteAnimated {
  static $resource = new ResourceAnimated('player', 'player02')
}