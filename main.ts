radio.onReceivedValue(function (name, value) {
    if (name == "RRL") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, value)
    } else if (name == "RRR") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, value)
    } else if (name == "RRLb") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, value)
    } else if (name == "RRRb") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, value)
    }
})
let RRD = 0
let RRTr = 0
let RRTl = 0
radio.setGroup(55)
basic.forever(function () {
    RRTl = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    RRTr = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    RRD = maqueen.Ultrasonic(PingUnit.Centimeters)
    serial.writeLine("" + (RRD))
    radio.sendValue("RRTl", RRTl)
    radio.sendValue("RRTr", RRTr)
    radio.sendValue("RRD", RRD)
    basic.pause(50)
})
