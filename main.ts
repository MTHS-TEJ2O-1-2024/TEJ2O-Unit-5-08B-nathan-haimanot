/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Haimanot
 * Created on: Sep 2020
 * This program make a 28BYJ-48 DC 5V stepper motor move
 * Also, using the new standard of using a while (true) statement
*/


// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let distanceToObject: number = 0

// loop setup
while (true) {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)

    // if button a is pressed move forward
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(10, 48)
    }

    // if object is <= 10 cm move backward
    if (distanceToObject <= 10) {
        robotbit.StpCarMove(-10, 48)
        basic.pause(1000) //
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        basic.pause(1000)
        robotbit.StpCarMove(10, 48)
    }

    basic.showIcon(IconNames.Happy)
}