Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}

function startTime() {
    var klocka = new Date();
    var weekNumber = klocka.getWeek();
    var t = klocka.getHours();
    var m = klocka.getMinutes();
    var s = klocka.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = t + ":" + m + ":" + s;
    document.getElementById("vecka").innerHTML = "Vecka: " + weekNumber;
    var x = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}