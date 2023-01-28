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
})
input.onButtonPressed(Button.B, function () {
	
})
let timer = 0
timer = 200
