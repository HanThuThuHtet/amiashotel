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

function dropbtn(e){

	//console.log("h");

	// document.getElementById("mydropdown").classList.toggle("show");

	//undefined
	//console.log(this.nextElementSibling);
	//console.log(e.target); //respective btn
	//console.log(e.target.nextElementSibling);
	e.target.nextElementSibling.classList.toggle("show");

}

function dropfilter(){
	//console.log("h");
	var getsearch,filter,getdropdiv,getlinks,linkvalue;

	getsearch = document.getElementById('search');
	filter = getsearch.value.toUpperCase();

	//getdropdiv = document.getElementById('mydropdown');
	// getlinks = document.querySelectorAll(".drop-contents a");
	//getlinks = document.getElementsByTagName('a');
	getlinks = document.querySelectorAll('.mydropdowns a')

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
//getheader.style.backgroundPosition ="center";
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

//Start Testimonial

const getcompanyname = document.querySelector('.companyname');
const getrole = document.querySelector('.role');
const gettestimonial = document.querySelector('.testimonial');

const testimonialdata = [

{
	name: "Our Reataurant",
	position: "Enjoy food with stanning lake view",
	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo"
},

{
	name: "Our Cafe",
	position: "Enjoy aribca grounded coffee with freshly baked",
	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo"
},

{
	name: "Our Spa",
	position: "Enjoy luxury spa with skillful message",
	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo"
},
{
	name: "Our Swimmimg Pool",
	position: "Enjoy swimming with crystal clear water",
	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo"
},

];

let idx = 0;

console.log(testimonialdata[idx].name);

function updatetestimonial(){

	// getcompanyname.textContent = testimonialdata[idx].name;
	// getrole.textContent = testimonialdata[idx].position;
	// gettestimonial.textContent = testimonialdata[idx].text;

	const {name,position,text} = testimonialdata[idx];

	getcompanyname.textContent = name;
	getrole.textContent = position;
	gettestimonial.textContent = text;

	//console.log(name,position,text);

	idx++;

	if(idx > testimonialdata.length-1){
		idx=0;
	}
	
}

updatetestimonial();
setInterval(updatetestimonial,10000);


//End Testimonial