/**
 * utils
 * This file exports functions that are uselful in more than one place
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
const moment = require("moment/min/moment.min.js")

// get the description of the time of an event (seen in every event list)
function getTime(event) {
    let time;
    let startTime = moment(event.start_time, "YYYY-MM-DD HH:mm:ss")
    let stopTime = moment(event.stop_time, "YYYY-MM-DD HH:mm:ss")
    let now = moment.now()
    if (startTime.isSameOrAfter(now) && stopTime.isAfter(now)) {
        return "Ongoing!"
    } else {
        time = startTime.calendar(null, { sameElse: "DD/MM/YYYY" })
    }
    return time;
}

//formats a date to be in the api's format
function getDate(str) {
    return moment(str, "MMM DD, YYYY").format("YYYYMMDD00")
}

module.exports = {
    getTime,
    getDate
}