/* =========================
   BACKGROUND SLIDESHOW
========================= */


const backgrounds = [
    "bg1.jpg",
    "bg2.jpeg",
    "bg3.jpg",
    "bg4.jpeg",
    "bg5.jpg",
    "bg6.jpg"
];


let currentImage = 0;

const background = document.querySelector(".background");



function changeBackground(){


    background.style.opacity = "0";



    setTimeout(()=>{


        background.style.backgroundImage =
        `url("${backgrounds[currentImage]}")`;



        background.style.opacity="1";



        currentImage++;



        if(currentImage >= backgrounds.length){

            currentImage = 0;

        }



    },700);



}



background.style.transition="opacity .7s ease";



changeBackground();


setInterval(changeBackground,6000);









/* =========================
   LANGUAGE SYSTEM
========================= */


let currentLanguage="en";



const translations={


en:{


title:"La Casetta Terrasini",

welcome:"Your Sicilian home away from home.",


intro:"Discover the house, book your stay and enjoy everything Terrasini has to offer.",


booking:"Book Your Stay",

booking_info:"Open Booking page",


maps:"Get Directions",

maps_info:"Open Google Maps",


app:"Terrasini App",

app_info:"Download official app",


airport:"Airport Transfers",

airport_info:"Bus and transport information",


emergency:"Emergency Contacts"


},



it:{


title:"La Casetta Terrasini",

welcome:"La tua casa siciliana lontano da casa.",


intro:"Scopri la casa, prenota il soggiorno e vivi tutto quello che Terrasini offre.",


booking:"Prenota il soggiorno",

booking_info:"Apri Booking",


maps:"Indicazioni stradali",

maps_info:"Apri Google Maps",


app:"App Terrasini",

app_info:"Scarica l'app ufficiale",


airport:"Trasferimenti aeroporto",

airport_info:"Bus e informazioni trasporti",


emergency:"Contatti di emergenza"


}



};





function changeLanguage(){


currentLanguage =

currentLanguage==="en" ? "it" : "en";




document.querySelector(".language-btn").innerHTML =

currentLanguage==="en"

? "🇬🇧 EN"

: "🇮🇹 IT";





document.querySelectorAll("[data-i18n]").forEach(element=>{


let key = element.dataset.i18n;



if(translations[currentLanguage][key]){


element.innerHTML =

translations[currentLanguage][key];


}



});


}








/* =========================
   DOUBLE CLICK ACTION
========================= */



let actionReady=false;

let selectedUrl="";





function confirmAction(type,url){



const popup =
document.getElementById("confirm-box");


const title =
document.getElementById("confirm-title");


const text =
document.getElementById("confirm-text");


const button =
document.getElementById("continue-btn");




if(type==="booking"){


title.innerHTML="🏡 Booking";


text.innerHTML=

"Open Booking to reserve your stay at La Casetta Terrasini.";


}




if(type==="maps"){


title.innerHTML="📍 Google Maps";


text.innerHTML=

"Open navigation and find the exact location of the house.";


}




selectedUrl=url;



popup.style.display="flex";





button.onclick=function(){


window.location.href=selectedUrl;


};



}








function closePopup(){


document.getElementById("confirm-box").style.display="none";


}









/* =========================
   APP TERRASINI
========================= */


function openAppConfirm(){


openInfo("app-info");


}







function openApp(){



let device =

navigator.userAgent.toLowerCase();





if(device.includes("android")){


window.location.href =

"https://play.google.com/store/apps/details?id=com.goodbarber.terrasini";


}

else if(

device.includes("iphone") ||

device.includes("ipad")

){


window.location.href =

"https://apps.apple.com/it/app/terrasini/id993594848";


}

else{


window.location.href =

"https://apps.apple.com/it/app/terrasini/id993594848";


}



}








/* =========================
   INFORMATION POPUPS
========================= */


function openInfo(id){


document.getElementById(id).style.display="flex";


}



function closeInfo(id){


document.getElementById(id).style.display="none";


}









/* =========================
   CLOSE POPUP OUTSIDE
========================= */


document.querySelectorAll(".popup").forEach(popup=>{


popup.addEventListener("click",function(event){



if(event.target === popup){


popup.style.display="none";


}



});


});
