let zähler = 0
basic.forever(function () {
    if (zähler == 0) {
        basic.showNumber(zähler)
    } else if (zähler == 9) {
        basic.showNumber(zähler)
    } else {
        if (input.buttonIsPressed(Button.A)) {
            zähler += -1
            basic.showNumber(zähler)
        } else if (input.buttonIsPressed(Button.B)) {
            zähler += 1
            basic.showNumber(zähler)
        } else {
        	
        }
    }
})
