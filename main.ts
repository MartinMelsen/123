namespace SpriteKind {
    export const Interact = SpriteKind.create()
    export const Mcd = SpriteKind.create()
    export const Hjem = SpriteKind.create()
    export const Puregymmedarbejder = SpriteKind.create()
    export const Bar = SpriteKind.create()
    export const Supermarked = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hjem, function (sprite, otherSprite) {
    DialogHjem()
})
function Hjem2 () {
    tiles.setCurrentTilemap(tilemap`Hjem`)
    Kæreste = sprites.create(assets.image`Rigtige kæreste`, SpriteKind.Hjem)
    tiles.placeOnTile(Kæreste, tiles.getTileLocation(38, 8))
    tiles.placeOnTile(Player1, tiles.getTileLocation(20, 38))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`mcddoor`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Mcd)
    tiles.setCurrentTilemap(tilemap`Startmap`)
    tiles.placeOnTile(Player1, tiles.getTileLocation(59, 105))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fitnessdør`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Puregymmedarbejder)
    tiles.setCurrentTilemap(tilemap`Startmap`)
    tiles.placeOnTile(Player1, tiles.getTileLocation(123, 17))
})
function DialogHjem () {
    Dialogmode = true
    if (info.score() > 10) {
        game.splash("Du ser ikke så træt ud", "Videre!")
    } else if (info.score() < -10) {
        game.splash("Trætte dreng da", "Tag dig en morfar")
    } else {
        game.splash("Udhvilet?", "Spørger din kæreste")
    }
    if (info.score() > 10) {
        story.showPlayerChoices("Rævesøvn", "Slappe af ")
    } else if (info.score() < -10) {
        story.showPlayerChoices("Nattesøvn", "Eftermiddagsmorfar")
    } else {
        story.showPlayerChoices("Lur", "Scrolle tiktok")
    }
    if (story.checkLastAnswer("Rævesøvn")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Slappe af")) {
        info.changeScoreBy(2)
    } else if (story.checkLastAnswer("Nattesøvn")) {
        info.changeScoreBy(15)
    } else if (story.checkLastAnswer("Eftermiddagsmorfar")) {
        info.changeScoreBy(15)
    } else if (story.checkLastAnswer("Lur")) {
        info.changeScoreBy(5)
    } else if (story.checkLastAnswer("Scrolle tiktok")) {
        info.changeScoreBy(-15)
    }
    Dialogmode = false
    pause(2000)
}
scene.onOverlapTile(SpriteKind.Player, tileUtil.door0, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`McDonalds`)
    MCD()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Puregymmedarbejder, function (sprite, otherSprite) {
    DialogPureGym()
})
function Bar2 () {
    tiles.setCurrentTilemap(tilemap`Bar`)
    Bartender = sprites.create(assets.image`Bartenderen`, SpriteKind.Bar)
    tiles.placeOnTile(Bartender, tiles.getTileLocation(8, 2))
    tiles.placeOnTile(Player1, tiles.getTileLocation(2, 18))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`bardør`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Bar)
    tiles.setCurrentTilemap(tilemap`Startmap`)
    tiles.placeOnTile(Player1, tiles.getTileLocation(101, 73))
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door2, function (sprite, location) {
    Hjem2()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Mcd, function (sprite, otherSprite) {
    dialogmcd()
})
function Puregym () {
    tiles.setCurrentTilemap(tilemap`Fitness`)
    Fitnessmedarbejder = sprites.create(assets.image`gymworker`, SpriteKind.Puregymmedarbejder)
    Fitnessmedarbejder2 = sprites.create(assets.image`gymworker`, SpriteKind.Puregymmedarbejder)
    tiles.placeOnTile(Fitnessmedarbejder, tiles.getTileLocation(27, 30))
    tiles.placeOnTile(Player1, tiles.getTileLocation(15, 5))
    tiles.placeOnTile(Fitnessmedarbejder2, tiles.getTileLocation(14, 31))
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Supermarked)
    tiles.setCurrentTilemap(tilemap`Startmap`)
    tiles.placeOnTile(Player1, tiles.getTileLocation(27, 18))
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door8, function (sprite, location) {
    Supermarkedet()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Supermarked, function (sprite, otherSprite) {
    DiaglogSupermarked()
})
function DiaglogSupermarked () {
    Dialogmode = true
    if (info.score() > 10) {
        game.splash("Du har da godt af lidt", "kød og stivelse")
    } else if (info.score() < -10) {
        game.splash("Grøntsager til dig.", "Måske?")
    } else {
        game.splash("Alt hvad hjertet kan begære")
    }
    if (info.score() > 10) {
        story.showPlayerChoices("Ribeye", "Nutella", "Broccoli", "Smør", "Pasta")
    } else if (info.score() < -10) {
        story.showPlayerChoices("Gulerod", "Løg", "Fløde", "Banan")
    } else {
        story.showPlayerChoices("Pære", "Hakket oksekød (1000g)", "Frosset nuggets")
    }
    if (story.checkLastAnswer("Ribeye")) {
        info.changeScoreBy(-10)
    } else if (story.checkLastAnswer("Nutella")) {
        info.changeScoreBy(-15)
    } else if (story.checkLastAnswer("Broccoli")) {
        info.changeScoreBy(15)
    } else if (story.checkLastAnswer("Smør")) {
        info.changeScoreBy(-8)
    } else if (story.checkLastAnswer("Gulerod")) {
        info.changeScoreBy(12)
    } else if (story.checkLastAnswer("Løg")) {
        info.changeScoreBy(5)
    } else if (story.checkLastAnswer("Fløde")) {
        info.changeScoreBy(-6)
    } else if (story.checkLastAnswer("Banan")) {
        info.changeScoreBy(8)
    } else if (story.checkLastAnswer("Pære")) {
        info.changeScoreBy(6)
    } else if (story.checkLastAnswer("Hakket oksekød (1000g)")) {
        info.changeScoreBy(-18)
    } else if (story.checkLastAnswer("Frosset nuggets")) {
        info.changeScoreBy(-12)
    } else if (story.checkLastAnswer("Pasta")) {
        info.changeScoreBy(-6)
    }
    Dialogmode = false
    pause(2000)
}
function Userstory () {
    game.showLongText("Velkommen til en bedre livsstil", DialogLayout.Center)
    game.showLongText("Nu skal du tage nogle valg for at blive et sundere og bedre menneske", DialogLayout.Center)
    game.showLongText("Rundt i byen vil du finde forskellige faciliteter ", DialogLayout.Center)
    scene.setBackgroundImage(assets.image`gymworker`)
    game.showLongText("I dit lokale PureGym kan du finde en medarbejder, du kan interagere med", DialogLayout.Center)
    scene.setBackgroundImage(assets.image`mcdmandd`)
    game.showLongText("Det samme kan du på McDonald's", DialogLayout.Center)
    scene.setBackgroundImage(assets.image`Kassemand`)
    game.showLongText("Supermarkedet byder også på hjælp til indkøbet", DialogLayout.Center)
    scene.setBackgroundImage(assets.image`Bartenderen`)
    game.showLongText("På baren kan du få hjælp af den lokale fulderik ", DialogLayout.Center)
    scene.setBackgroundImage(assets.image`Rigtige kæreste`)
    game.showLongText("Din kæreste kan også hjælpe dig <3", DialogLayout.Center)
    scene.setBackgroundImage(img`
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
        `)
    game.showLongText("Du får point baseret på de valg, du tager :D", DialogLayout.Center)
    game.showLongText("Følg stien for at komme rundt i byen", DialogLayout.Center)
}
function DialogPureGym () {
    Dialogmode = true
    if (info.score() > 10) {
        game.splash("Fit for fight!", "Bliv endelig ved!")
    } else if (info.score() < -10) {
        game.splash("Op på løbebåndet", "med dig")
    } else {
        game.splash("Sundere,", "det kan du da blive")
    }
    if (info.score() > 10) {
        story.showPlayerChoices("Bænkpres", "Skippe et sæt", "Hack squat")
    } else if (info.score() < -10) {
        story.showPlayerChoices("Løbebånd", "Dødløft", "Tage steroider")
    } else {
        story.showPlayerChoices("Spinning", "Proteinbar", "Tage selfies")
    }
    if (story.checkLastAnswer("Bænkpres")) {
        info.changeScoreBy(10)
    } else if (story.checkLastAnswer("Skippe et sæt")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Hack squat")) {
        info.changeScoreBy(8)
    } else if (story.checkLastAnswer("Løbebånd")) {
        info.changeScoreBy(15)
    } else if (story.checkLastAnswer("Dødløft")) {
        info.changeScoreBy(10)
    } else if (story.checkLastAnswer("Tage steroider")) {
        info.changeScoreBy(-20)
    } else if (story.checkLastAnswer("Spinning")) {
        info.changeScoreBy(12)
    } else if (story.checkLastAnswer("Proteinbar")) {
        info.changeScoreBy(5)
    } else if (story.checkLastAnswer("Tage selfies")) {
        info.changeScoreBy(-10)
    }
    Dialogmode = false
    pause(2000)
}
function DialogBar () {
    Dialogmode = true
    if (info.score() > 10) {
        game.splash("Tørstig?", "Drik igennem")
    } else if (info.score() < -10) {
        game.splash("Har du virkelig ", "brug for det..?")
    } else {
        game.splash("Hvad skulle det være?")
    }
    if (info.score() > 10) {
        story.showPlayerChoices("Vodka", "Absinth", "Øl", "Jägermeister")
    } else if (info.score() < -10) {
        story.showPlayerChoices("Tuborg", "Nej, det har jeg ikke", "Vand")
    } else {
        story.showPlayerChoices("Mokai", "Sambuca", "Fanta")
    }
    if (story.checkLastAnswer("Vodka")) {
        info.changeScoreBy(-10)
    } else if (story.checkLastAnswer("Absinth")) {
        info.changeScoreBy(-15)
    } else if (story.checkLastAnswer("Øl")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Jägermeister")) {
        info.changeScoreBy(-8)
    } else if (story.checkLastAnswer("Tuborg")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Nej, det har jeg ikke")) {
        info.changeScoreBy(10)
    } else if (story.checkLastAnswer("Vand")) {
        info.changeScoreBy(15)
    } else if (story.checkLastAnswer("Mokai")) {
        info.changeScoreBy(-3)
    } else if (story.checkLastAnswer("Sambuca")) {
        info.changeScoreBy(-8)
    } else if (story.checkLastAnswer("Fanta")) {
        info.changeScoreBy(5)
    }
    Dialogmode = false
    pause(2000)
}
function Supermarkedet () {
    tiles.setCurrentTilemap(tilemap`Supermarked`)
    Kassedame = sprites.create(assets.image`Kassemand`, SpriteKind.Supermarked)
    Kassedame2 = sprites.create(assets.image`Kassemand`, SpriteKind.Supermarked)
    tiles.placeOnTile(Kassedame, tiles.getTileLocation(13, 13))
    tiles.placeOnTile(Player1, tiles.getTileLocation(1, 41))
    tiles.placeOnTile(Kassedame2, tiles.getTileLocation(36, 48))
}
scene.onOverlapTile(SpriteKind.Player, tileUtil.door10, function (sprite, location) {
    Puregym()
})
function MCD () {
    tiles.setCurrentTilemap(tilemap`McDonalds`)
    McDMedarbejder = sprites.create(assets.image`mcdmandd`, SpriteKind.Mcd)
    McMedarbejde2 = sprites.create(assets.image`mcdmandd`, SpriteKind.Mcd)
    tiles.placeOnTile(McDMedarbejder, tiles.getTileLocation(24, 12))
    tiles.placeOnTile(Player1, tiles.getTileLocation(29, 38))
    tiles.placeOnTile(McMedarbejde2, tiles.getTileLocation(33, 12))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bar, function (sprite, otherSprite) {
    DialogBar()
})
function dialogmcd () {
    Dialogmode = true
    if (info.score() > 10) {
        game.splash("Du ser tynd ud", "spis noget mere!")
    } else if (info.score() < -10) {
        game.splash("Hej store dreng", "hvad kan jeg gøre for dig?")
    } else {
        game.splash("Velkommen til McD", "Hvad skal der ske?")
    }
    if (info.score() > 10) {
        story.showPlayerChoices("Big Mac", "Big Tasty Bacon", "20-piece nugget", "Homestyle ", "Cheese tops")
    } else if (info.score() < -10) {
        story.showPlayerChoices("Cheeseburger", "Hamburger", "6-piece nugget", "Gulerødder", "Æblestykker")
    } else {
        story.showPlayerChoices("Cheeseburger", "Big Mac", "Coca Cola", "Gulerødder", "Happy Meal")
    }
    if (story.checkLastAnswer("Cheeseburger")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Coca Cola")) {
        info.changeScoreBy(15)
    } else if (story.checkLastAnswer("Hamburger")) {
        info.changeScoreBy(-4)
    } else if (story.checkLastAnswer("Gulerødder")) {
        info.changeScoreBy(15)
    } else if (story.checkLastAnswer("Happy meal")) {
        info.changeScoreBy(-8)
    } else if (story.checkLastAnswer("Big Mac")) {
        info.changeScoreBy(-12)
    } else if (story.checkLastAnswer("6-piece nugget")) {
        info.changeScoreBy(-10)
    } else if (story.checkLastAnswer("Æblestykker")) {
        info.changeScoreBy(12)
    } else if (story.checkLastAnswer("Big Tasty Bacon")) {
        info.changeScoreBy(-20)
    } else if (story.checkLastAnswer("20-piece nugget")) {
        info.changeScoreBy(-20)
    } else if (story.checkLastAnswer("Homestyle")) {
        info.changeScoreBy(-15)
    } else if (story.checkLastAnswer("Cheese tops")) {
        info.changeScoreBy(-8)
    }
    Dialogmode = false
    pause(2000)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile53`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Hjem)
    tiles.setCurrentTilemap(tilemap`Startmap`)
    tiles.placeOnTile(Player1, tiles.getTileLocation(59, 67))
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door3, function (sprite, location) {
    Bar2()
})
let McMedarbejde2: Sprite = null
let McDMedarbejder: Sprite = null
let Kassedame2: Sprite = null
let Kassedame: Sprite = null
let Fitnessmedarbejder2: Sprite = null
let Fitnessmedarbejder: Sprite = null
let Bartender: Sprite = null
let Kæreste: Sprite = null
let Dialogmode = false
let Player1: Sprite = null
Userstory()
tiles.setCurrentTilemap(tilemap`Startmap`)
Player1 = sprites.create(assets.image`player1`, SpriteKind.Player)
scene.cameraFollowSprite(Player1)
tiles.placeOnTile(Player1, tiles.getTileLocation(59, 68))
Dialogmode = false
forever(function () {
    if (Dialogmode == false) {
        controller.moveSprite(Player1, 200, 200)
    } else if (Dialogmode == true) {
        controller.moveSprite(Player1, 0, 0)
    }
    if (info.score() < -20) {
        Player1.setImage(assets.image`playerfat`)
    } else if (info.score() > -20) {
        Player1.setImage(assets.image`player1`)
    }
    if (info.score() < -49) {
        Player1.x += 16
        game.showLongText("Knap så gode beslutninger du...", DialogLayout.Center)
        game.showLongText("Det´ en ommer!", DialogLayout.Center)
        tiles.setCurrentTilemap(tilemap`Startmap`)
        tiles.placeOnTile(Player1, tiles.getTileLocation(57, 15))
        info.setScore(0)
        sprites.destroyAllSpritesOfKind(SpriteKind.Mcd)
        sprites.destroyAllSpritesOfKind(SpriteKind.Hjem)
        sprites.destroyAllSpritesOfKind(SpriteKind.Puregymmedarbejder)
        sprites.destroyAllSpritesOfKind(SpriteKind.Bar)
        sprites.destroyAllSpritesOfKind(SpriteKind.Supermarked)
    } else if (info.score() > 49) {
        Player1.x += 16
        tiles.setCurrentTilemap(tilemap`level8`)
        scene.setBackgroundImage(assets.image`rigtigt trofæ7`)
        game.splash("Tillykke med det!")
        pause(2000)
        game.gameOver(true)
    }
})
