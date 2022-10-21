console.log("h");

//Start JQ AREA

$(document).ready(function(){
	console.log("hekki");

	//Start room

	$('.roompopup').magnificPopup({ type: 'image'});

	//End room
});

// Strar JQ AREA







// Start Header

//Start nav bar

function dropbtn(){

	//console.log("h");

	document.getElementById("mydropdown").classList.toggle("show");


}

function dropfilter(){
	//console.log("h");
	var getsearch,filter,getdropdiv,getlinks,linkvalue;

	getsearch = document.getElementById('search');
	filter = getsearch.value.toUpperCase();

	getdropdiv = document.getElementById('mydropdown');
	// getlinks = document.querySelectorAll(".drop-contents a");
	getlinks = getdropdiv.getElementsByTagName('a');

	for(var x = 0 ; x < getlinks.length ; x++){
		//linkvalue = getlinks[x].textContent;
		linkvalue = getlinks[x].textContent || getlinks[x].innerText;
		console.log(linkvalue);

		if(linkvalue.toUpperCase().indexOf(filter) > -1){
				getlinks[x].style.display = "block";
		}else{
			getlinks[x].style.display = "none";
		}



	}


}


//End navbar

//Start auto bg
function* genfun(){
	var index = 7;
	while(true){
		yield index++;
		if(index > 11){
			index = 7;
		}
	}
}
var getgen = genfun();
// console.log(getgen.next().value);


var getheader = document.querySelector('header');
getheader.style.background = `url('./assets/img/banner/banner${getgen.next().value}.jpg')`; //to HTML
getheader.style.backgroundPosition ="center";
getheader.style.backgroundSize = "cover";

function autoload(){

	//console.log(getgen.next().value);
	getheader.style.background = `url('./assets/img/banner/banner${getgen.next().value}.jpg')`; //to HTML
	//getheader.style.backgroundPosition ="center";
	getheader.style.backgroundSize = "cover";
}

setInterval(autoload,2500);

//End suto bg


//End Header