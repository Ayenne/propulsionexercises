function twoDigits(value) {
    return value < 10 ? '0' + value : '' + value;
}

function time_conversion(minutes){
    return twoDigits(Math.floor(minutes / 60)) + ":" + twoDigits(minutes % 60);
}
console.log(time_conversion(129));