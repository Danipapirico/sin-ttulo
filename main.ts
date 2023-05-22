basic.forever(function () {
    radio.setGroup(255)
    if (input.magneticForce(Dimension.Strength) > 150) {
        music.ringTone(262)
        basic.showIcon(IconNames.Square)
        basic.pause(10)
        basic.showIcon(IconNames.SmallSquare)
    } else if (input.magneticForce(Dimension.Strength) < 150) {
        basic.clearScreen()
        music.stopAllSounds()
    }
})
