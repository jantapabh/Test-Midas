
var firstvariable = "Hello";
var secondvariable = "world";

var regExString = new RegExp("(?:" + firstvariable + ")((.[\\s\\S]*))(?:" + secondvariable + ")", "ig");

var testRE = regExString.exec("Peter Hello Thank you world Pan");

if (testRE && testRE.length > 1) {
    console.log(testRE[1]);
}

