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
		  winner: "Sanders" }, ];

var Hillary = ["Iowa", "Nevada", "South Carolina", "Alabama", "Arkansas", "Georgia", "Massachusetts", "Tennessee", "Texas", "Virginia", "Louisiana", "Mississippi", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona"];

var Sanders = ["New Hampshire", "Colorado", "Minnesota", "Oklahoma", "Vermont", "Kansas", "Nebraska", "Maine", "Michigan", "Idaho", "Utah", "Alaska", "Hawaii", "Washington"];


function go(){
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
}


