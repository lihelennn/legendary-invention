var Hillary = ["Iowa", "Nevada", "South Carolina", "Alabama", "Arkansas", "Georgia", "Massachusetts", "Tennessee", "Texas", "Virginia", "Louisiana", "Mississippi", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona"];

var Sanders = ["New Hampshire", "Colorado", "Minnesota", "Oklahoma", "Vermont", "Kansas", "Nebraska", "Maine", "Michigan", "Idaho", "Utah", "Alaska", "Hawaii", "Washington"];

var data = [1660, 2222, 1024, 1261, 865, 944, 1491, 1406, 821];

var men = [43, 45, 44, 39, 40, 43, 38, 42, 46];

var women = [57, 55, 56, 61, 60, 57, 62, 58, 54];

var menC = [44, 32, 44, 68, 73, 60, 66, 41, 33];
var womenC = [53, 44, 57, 79, 80, 76, 76, 57, 48];

var menS = [50, 67, 53, 32, 24, 37, 33, 58, 60];
var womenC = [42, 55, 41, 21, 17, 23, 23, 42, 46];

var states = ["Iowa", "New Hampshire", "Nevada", "South Carolina", "Alabama", "Arkansas", "Georgia", "Massachusetts", "Oklahoma"];

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");

barEnter.style("width", function(d,i) {
    return Math.round(d * ( men[i]/100) * (menS[i]/100)) + "px"; });

barEnter.style("background-color", function(d) {
    if (d >= 0)
	return "steelblue";
    else
	return "grey"; });
