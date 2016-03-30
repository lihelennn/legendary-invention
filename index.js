var dem_data = [ {state: "Iowa", respondents: 1660, 
		  men: "43%", women: "57%", 
		  menC: 44, womenC: 53, 
		  menS: 50, womenS: 42,  
		  grad: "50%", nograd: "50%", 
		  gradC: 51, nogradC: 48, 
		  gradS: 44, nogradS: 47, 
		  winner: "Clinton" },
       		 {state: "New Hampshire", respondents: 2222, 
		  men: "45%", women: "55%", 
		  menC: 32, womenC: 44, 
		  menS: 67, womenS: 55, 
		  grad: "60%", nograd: "40%", 
		  gradC: 43, nogradC: 31, 
		  gradS: 56, nogradS: 67, 
		  winner: "Sanders" },
		 {state: "Nevada", respondents: 1024, 
		  men: "44%", women: "56%", 
		  menC: 44, womenC: 57, 
		  menS: 53, womenS: 41, 
		  grad: "46%", nograd: "54%", 
		  gradC: 54, nogradC: 48, 
		  gradS: 43, nogradS: 49 , 
		  winner: "Clinton"},
		 {state: "South Carolina", respondents: 1261, 
		  men: "39%", women: "61%", 
		  menC: 68, womenC: 79, 
		  menS: 32, womenS: 21, 
		  grad: "40%", nograd: "60%", 
		  gradC: 70, nogradC: 77, 
		  gradS: 30, nogradS: 23, 
		  winner: "Clinton" },
		 {state: "Alabama", respondents: 865, 
		  men: "40%", women: "60%", 
		  menC: 73, womenC: 80, 
		  menS: 24, womenS: 17, 
		  grad: "51%", nograd: "49%", 
		  underC: 76, overC: 79, 
		  underS: 22, overS: 17, 
		  winner: "Clinton" },
		 {state: "Arkansas", respondents: 944, 
		  men: "43%", women: "57%", 
		  menC: 60, womenC: 76, 
		  menS: 37, womenS: 23, 
		  grad: "44%", nograd: "56%", 
		  gradC: 70, nogradC: 68, 
		  gradS: 28, nogradS: 30, 
		  winner: "Clinton" },
		 {state: "Georgia", respondents: 1491, 
		  men: "38%", women: "62%", 
		  menC: 66, womenC: 76, 
		  menS: 33, womenS: 23, 
		  grad: "54%", nograd: "46%", 
		  gradC: 71, nogradC: 73, 
		  gradS: 29, nogradS: 27, 
		  winner: "Clinton" },
		 {state: "Massachusetts", respondents: 1406, 
		  men: "42%", women: "58%", 
		  menC: 41, womenC: 57, 
		  menS: 58, womenS: 42, 
		  grad: "67%", nograd: "33%", 
		  gradC: 54, nogradC: 41, 
		  gradS: 45, nogradS: 59, 
		  winner: "Clinton" },
		 {state: "Oklahoma", respondents: 821, 
		  men: "46%", women: "54%", 
		  menC: 33, womenC: 48, 
		  menS: 60, womenS: 46, 
		  grad: "49%", nograd: "51%", 
		  gradC: 45, nogradC: 36, 
		  gradS: 50, nogradS: 55, 
		  winner: "Sanders" } ];

var rep_data = [ {state: "Iowa", respondents: 1794, 
		  men: "52%", women: "48%", 
		  menC: 29, womenC: 27, 
		  menK: 2, womenK: 2, 
		  menR: 25, womenR: 21, 
		  menT: 25, womenT: 24, 
		  grad: "51%", nograd: "49%", 
		  gradC: 25, nogradC: 31, 
		  gradK: 3, nogradK: 1, 
		  gradR: 28, nogradR: 17, 
		  gradT: 21, nogradT: 28, 
		  winner: "Cruz" },
		 {state: "New Hampshire", respondents: 2036, 
		  men: "52%", women: "48%", 
		  menC: 12, womenC: 11, 
		  menK: 16, womenK: 16, 
		  menR: 9, womenR: 12, 
		  menT: 38, womenT: 33, 
		  grad: "53%", nograd: "47%", 
		  gradC: 11, nogradC: 13, 
		  gradK: 19, nogradK: 12, 
		  gradR: 12, nogradR: 10, 
		  gradT: 30, nogradT: 42, 
		  winner: "Trump" },
		 {state: "Nevada", respondents: 1573, 
		  men: "52%", women: "48%", 
		  menC: 23, womenC: 20, 
		  menK: 3, womenK: 4, 
		  menR: 22, womenR: 25, 
		  menT: 47, womenT: 45, 
		  grad: "49%", nograd: "51%", 
		  gradC: 21, nogradC: 22, 
		  gradK: 5, nogradK: 3, 
		  gradR: 28, nogradR: 20, 
		  gradT: 40, nogradT: 51, 
		  winner: "Trump" },
		 {state: "South Carolina", respondents: 1800, 
		  men: "50%", women: "50%", 
		  menC: 37, womenC: 39, 
		  menK: 12, womenK: 14, 
		  menR: 5, womenR: 9, 
		  menT: 43, womenT: 36, 
		  grad: "51%", nograd: "49%", 
		  gradC: 38, nogradC: 38, 
		  gradK: 18, nogradK: 8, 
		  gradR: 8, nogradR: 6, 
		  gradT: 33, nogradT: 46, 
		  winner: "Trump" },
		 {state: "Alabama", respondents: 1237, 
		  men: "49%", women: "51%", 
		  menC: 22, womenC: 21, 
		  menK: 4, womenK: 5, 
		  menR: 14, womenR: 23, 
		  menT: 52, womenT: 36, 
		  grad: "44%", nograd: "56%", 
		  gradC: 22, nogradC: 21, 
		  gradK: 7, nogradK: 2, 
		  gradR: 23, nogradR: 15, 
		  gradT: 35, nogradT: 51, 
		  winner: "Trump" },
		 {state: "Arkansas", respondents: 1382, 
		  men: "52%", women: "48%", 
		  menC: 29, womenC: 30, 
		  menK: 4, womenK: 4, 
		  menR: 23, womenR: 28, 
		  menT: 37, womenT: 31, 
		  grad: "45%", nograd: "55%", 
		  gradC: 28, nogradC: 31, 
		  gradK: 6, nogradK: 2,
		  gradR: 31, nogradR: 21, 
		  gradT: 28, nogradT: 39,
		  winner: "Trump" },
		 {state: "Georgia", respondents: 1704, 
		  men: "49%", women: "51%", 
		  menC: 22, womenC: 24, 
		  menK: 6, womenK: 6, 
		  menR: 21, womenR: 28, 
		  menT: 45, womenT: 34, 
		  grad: "53%", nograd: "47%", 
		  gradC: 24, nogradC: 22, 
		  gradK: 6, nogradK: 5, 
		  gradR: 29, nogradR: 20, 
		  gradT: 34, nogradT: 46, 
		  winner: "Trump" },
		 {state: "Massachusetts", respondents: 801, 
		  men: "52%", women: "48%", 
		  menC: 10, womenC: 9, 
		  menK: 16, womenK: 19, 
		  menR: 16, womenR: 20, 
		  menT: 52, womenT: 46, 
		  grad: "60%", nograd: "40%", 
		  gradC: 10, nogradC: 8, 
		  gradK: 24, nogradK: 10, 
		  gradR: 20, nogradR: 14, 
		  gradT: 40, nogradT: 62, 
		  winner: "Trump" },
		 {state: "Oklahoma", respondents: 938, 
		  men: "50%", women: "50%", 
		  menC: 34, womenC: 35, 
		  menK: 4, womenK: 4, 
		  menR: 24, womenR: 28, 
		  menT: 33, womenT: 24, 
		  grad: "49%", nograd: "51%", 
		  gradC: 31, nogradC: 36, 
		  gradK: 4, nogradK: 3, 
		  gradR: 33, nogradR: 20, 
		  gradT: 24, nogradT: 33, 
		  winner: "Cruz" } ];

var Hillary = ["Iowa", "Nevada", "South Carolina", "Alabama", "Arkansas", "Georgia", "Massachusetts", "Tennessee", "Texas", "Virginia", "Louisiana", "Mississippi", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona"];

var Sanders = ["New Hampshire", "Colorado", "Minnesota", "Oklahoma", "Vermont", "Kansas", "Nebraska", "Maine", "Michigan", "Idaho", "Utah", "Alaska", "Hawaii", "Washington"];

//var state = "Iowa"
//var category = "Gender";
var data;
var dataCategory = [];
var dataCategory2 = [];
var infoArray = [];

function getData(){
    //WHAT STATE IS SELECTED?
    var stateElement = document.getElementById("states");
    var state = stateElement.options[stateElement.selectedIndex].value;

    //WHAT CATEGORY IS SELECTED?
    var category;
    var radios = document.getElementsByName("radioData");
    for (i=0; i<radios.length; i++){
	if(radios[i].checked){
	    category = radios[i].value;
	    break;
	}
    }
    console.log(state + " , " + category);

    //GET THE DATA FOR THE CORRESPONDING STATE
    for (i=0; i<dem_data.length; i++){
	if (dem_data[i]["state"] == state){
	    data = dem_data[i];
	    console.log(data);
	}
    }
    console.log(state);
    
    infoArray[0] = "State: " + state;
    infoArray[1] = "Number of Respondents: " + data["respondents"];
    infoArray[2] = "Winner: " + data["winner"];

    if(category == "Gender"){
	dataCategory.push(data["men"]);
	infoArray[3] = "Men: " + data["men"];
	infoArray[4] = "Women: " + data["women"];
	dataCategory.push(data["menC"]);
	dataCategory.push(data["menS"]);
	dataCategory.push(data["women"]);
	dataCategory.push(data["womenC"]);
	dataCategory.push(data["womenS"]);
	dataCategory2.push("men: " + dataCategory[0]);
	dataCategory2.push("menC: " + dataCategory[1]);
	dataCategory2.push("menS: " + dataCategory[2]);
	dataCategory2.push("women: " + dataCategory[3]);
	dataCategory2.push("womenC: " + dataCategory[4]);
	dataCategory2.push("womenS: " + dataCategory[5]);
    }else{
	infoArray[3] = "College Grads: " + data["grad"];
	infoArray[4] = "Non-College Grads: " + data["nograd"];
	dataCategory.push(data["grad"]);
	dataCategory.push(data["gradC"]);
	dataCategory.push(data["gradS"]);
	dataCategory.push(data["nograd"]);
	dataCategory.push(data["nogradC"]);
	dataCategory.push(data["nogradS"]);
	dataCategory2.push("grad: " + dataCategory[0]);
	dataCategory2.push("gradC: " + dataCategory[1]);
	dataCategory2.push("gradS: " + dataCategory[2]);
	dataCategory2.push("nograd: " + dataCategory[3]);
	dataCategory2.push("gradC: " + dataCategory[4]);
	dataCategory2.push("gradS: " + dataCategory[5]);
    }
}

function go(){

/*
    d3.select(".charDem").transition().each("end",function(){
	d3.select(this).remove();
    });
    d3.select(".infoDem").transition().each("end",function(){
	d3.select(this).remove();
	
    });
    var clearHelp = d3.select(".left");
    var clear = clearHelp.selectAll("div");
    var clearUpdate = clear.data(["chartDem","infoDem"]);
    var clearEnter = clearUpdate.enter().append("div")
    clearEnter.attr("class",function(d){return d;});

*/

    
    
    getData();
    var infoDem = d3.select(".infoDem");
    var info = infoDem.selectAll("h3");
    var infoUpdate = info.data(infoArray);
    var infoEnter = infoUpdate.enter().append("h3");
    infoEnter.text(function(d){
	return d;
    });

    var chartDem = d3.select(".chartDem");
    var bar = chartDem.selectAll("div");
    var barUpdate = bar.data(dataCategory);
    var barEnter = barUpdate.enter().append("div");
    barEnter.style("width",function(d){return d*2.5+"px";});
    bar = chartDem.selectAll("div");
    barUpdate = bar.data(dataCategory2);
    console.log(dataCategory2);
    barEnter.text(function(d){
	return d;
    });

}


/*

function go(){
    alert("yo");
    //TRANSITIONS
    d3.select(".chartDem").transition()
	.selectAll("div")
	.data(dataCategory)
	.style("width",function(d){return d*2.5+"px";})
	.selectAll("div")
	.data(dataCategory2)
	.text(function(d){return d;});
    
    d3.select(".infoDem").transition()
	.selectAll("div")
	.data(infoArray)
	.text(function(f){return d;});
    
}
*/
