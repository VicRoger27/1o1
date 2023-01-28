while (false) {
    for (let index = 0; index <= 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
}
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
