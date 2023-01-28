input.onButtonPressed(Button.A, function () {
    music.playMelody("E B C5 A B G A F ", 130)
    basic.showIcon(IconNames.EigthNote)
    basic.pause(2000)
    music.playTone(262, timer)
    music.rest(timer)
    music.playTone(494, timer)
    music.playTone(440, timer)
    music.playTone(392, timer)
    music.playTone(131, timer)
    music.playTone(880, timer)
    music.playTone(523, timer)
    music.playTone(277, timer)
    music.playTone(262, timer)
    music.playTone(294, timer)
    music.rest(timer)
    music.playTone(494, timer)
    music.playTone(440, timer)
    music.playTone(392, timer)
    music.playTone(131, timer)
    music.playTone(880, timer)
    music.playTone(523, timer)
    music.playTone(277, timer)
    music.playTone(262, timer)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Meh)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("bye:(")
    basic.showString("i wish i wish...")
    basic.showString(":(")
    basic.showString(":(")
    basic.showString(":(")
    music.playMelody("C D C E F G C5 A ", 120)
    basic.pause(1000)
    while (true) {
        music.playMelody("C5 B A G F E D C ", 120)
        music.playMelody("C D E F G A B C5 ", 120)
        music.playMelody("C C5 D B E A F G ", 120)
        music.playTone(247, timer2)
    }
    basic.showString("haha!")
})
input.onButtonPressed(Button.B, function () {
	
})
let timer2 = 0
let timer = 0
timer = 200
timer2 = 10000
