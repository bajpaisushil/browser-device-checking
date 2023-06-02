// Check the browser name
var browserName = "";
if (/Opera|OPR/i.test(window.navigator.userAgent)) {
    browserName = "Opera";
} else if (/Chrome/i.test(window.navigator.userAgent)) {
    browserName = "Chrome";
} else if (/Firefox/i.test(window.navigator.userAgent)) {
    browserName = "Firefox";
} else if (/Safari/i.test(window.navigator.userAgent)) {
    browserName = "Safari";
} else if (/Edge/i.test(window.navigator.userAgent)) {
    browserName = "Edge";
} else if (/MSIE|Trident/i.test(window.navigator.userAgent)) {
    browserName = "Internet Explorer";
} else if (/Brave/i.test(window.navigator.userAgent)) {
    browserName = "Brave";
} else {
    browserName = "Unknown";
}

console.log(window.navigator.userAgent);
// Check if the website is opening on a phone or computer
var deviceType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent) ? "Phone" : "Computer";

// Display the results using an alert
alert("Browser Name: " + browserName + "\nDevice Type: " + deviceType);
