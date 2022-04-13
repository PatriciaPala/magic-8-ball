input.onButtonPressed(Button.A, function () {
    random_ = randint(0, 2)
    if (random_ == 0) {
        basic.showIcon(IconNames.Happy)
        basic.showString("maybe")
    } else if (random_ == 1) {
        basic.showIcon(IconNames.Asleep)
        basic.showString("No")
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
let random_ = 0
basic.showIcon(IconNames.Happy)
