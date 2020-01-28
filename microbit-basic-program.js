let iconHeart = true
input.onButtonPressed(Button.A, function () {
    iconHeart = !iconHeart
})
basic.forever(function () {
    if (iconHeart) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Butterfly)
    }
    basic.pause(100)
    basic.clearScreen()
})


// = is an assignment
// == is an equality comparison
