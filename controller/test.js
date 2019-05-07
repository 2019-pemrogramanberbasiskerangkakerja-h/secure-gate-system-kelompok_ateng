var time = new Date();
var time = ("0" + time.getHours()).slice(-2)   + ":" + ("0" + time.getMinutes()).slice(-2) + ":" + ("0" + time.getSeconds()).slice(-2);

var str1 = "10:20:45",
    str3 = "07:38:01"
    str2 = "05:10:10";

console.log(time)
console.log(str1)
console.log(str2)

if (str3 > str1)
    console.log("Time 1 is later than time 2");
else
    console.log("Time 2 is later than time 1");