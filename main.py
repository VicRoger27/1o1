def on_button_pressed_a():
    music.play_melody("E B C5 A B G A F ", 130)
    basic.show_icon(IconNames.EIGTH_NOTE)
    basic.pause(2000)
    music.play_tone(262, timer)
    music.rest(timer)
    music.play_tone(494, timer)
    music.play_tone(440, timer)
    music.play_tone(392, timer)
    music.play_tone(131, timer)
    music.play_tone(880, timer)
    music.play_tone(523, timer)
    music.play_tone(277, timer)
    music.play_tone(262, timer)
    music.play_tone(294, timer)
    music.rest(timer)
    music.play_tone(494, timer)
    music.play_tone(440, timer)
    music.play_tone(392, timer)
    music.play_tone(131, timer)
    music.play_tone(880, timer)
    music.play_tone(523, timer)
    music.play_tone(277, timer)
    music.play_tone(262, timer)
    basic.show_icon(IconNames.YES)
    basic.pause(1000)
    basic.show_icon(IconNames.NO)
    basic.pause(1000)
    basic.show_leds("""
        . . . . .
                # . . . #
                . . . . .
                # . . . #
                # # # # #
    """)
    basic.pause(1000)
    basic.show_icon(IconNames.MEH)
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_string("bye:(")
    basic.show_string("i wish i wish...")
    basic.show_string(":(")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

timer = 0
timer = 200