Stage loading
1: Add list to sprite batch
2: [Stage()] Pass the sprite batch to a stage, run _init()
3: [Stage _init()] Stage goes through the sprite batch's list and adds their resource to this.loader
4: [Stage()] use the loader :)

Sprite types
1: Assign resource
2: Behavior functions??

Sprite resources
'misc/missing'
> id = rescources['assets/misc.json'].textures
> new Sprite(id['missing.png'])
