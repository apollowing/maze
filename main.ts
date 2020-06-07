namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
a a a a a . . . . a a a a a a a 
. . . . a . a a . a a a a a a a 
a a a . a . a a . a a a a a a a 
a a a . . . a a . a . . . a a a 
a a a a a a a a . a . a . a a a 
a a . . . . . . . a . a . a a a 
a a . a a a a a a a . a . a a a 
a a . a a a a a a . . a . a a a 
a a . . . . . . . . a a . a a a 
a a a a a a a a a a a a . a a a 
a a a a a a a a a a a a . a a a 
a . . . . . . . . . . . . a a a 
a . a a a a a a a a a a a a . . 
a . a a a a a a a a a . . . . a 
a . . . . . . . . . . . a a a a 
a a a a a a a a a a a a a a a a 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . a a a a a a . . . . . 
. . . . a a . . . . a a . . . . 
. . . . a . f . . f . a . . . . 
. . . . a . . . . . . a . . . . 
. . . . a a . . . . a a . . . . 
. . . . . a . f f . a . . . . . 
. . . . . a a a a a a . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . 9 9 9 9 9 9 9 . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . 9 9 . 9 9 . . . . . 
. . . . . . 9 . . . 9 . . . . . 
. . . . . 9 9 . . . 9 9 . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d0d0d0d0c0c0c0c0c0c0c0c0c0c0d0c0c0c0c0d0d0d0d0d0d0d0c0c0c0c0d0c0c0c0c0c0c0c0c0c0c0d0c0c0c0e0d0d0d0d0d0d0d0d0d0c0d0d0c0c0c0c0c0c0c0c0c0c0c0c0d0c0d0c0c0c0c0c0c0c0c0c0d0d0d0d0d0c0d0c0c0c0c0d0c0c0c0c0d0c0c0c0c0d0d0c0c0c0c0c0c0c0c0c0d0c0c0c0d0d0c0c0c0c0c0c0c0d0d0d0d0c0c0c0c0c0c0c0c0c0c0f0f0f0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0f0f0f0f0f0f0c0c0c0c0c0c0c0c0c0d0d0d0d0d0d0d0f0f0f0f0f0f100c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 . . . . . . . 2 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
. . . . . . . . . . 2 . . 2 2 2 
2 2 2 2 2 2 2 2 2 . 2 . 2 2 2 2 
2 2 2 2 2 . . . . . 2 . 2 2 2 2 
. 2 2 2 2 . 2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 . 2 2 2 . . 2 2 2 2 2 
2 2 . . . . 2 2 2 2 2 2 2 2 2 2 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath3,myTiles.tile1,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles2,sprites.builtin.forestTiles4,sprites.builtin.forestTiles0,sprites.castle.tilePath5,myTiles.tile2,sprites.castle.tilePath2,myTiles.tile3],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, myTiles.tile2)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
