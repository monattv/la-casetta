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


let currentBackground = 0;


const background = document.querySelector(".background");


function changeBackground(){

    background.style.opacity = "0";


    setTimeout(()=>{


        background.style.backgroundImage =
        `url('${backgrounds[currentBackground]}')`;


        background.style.opacity = "1";


        currentBackground++;


        if(currentBackground >= backgrounds.length){

            currentBackground = 0;

        }


    },700);

}



background.style.transition="opacity .7s ease";


changeBackground();


setInterval(changeBackground,6000);






/* =========================
   LANGUAGE SYSTEM
========================= */


let language="en";



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

app_info:"Download the official app",

airport:"Airport Transfers",

airport_info:"Bus and transport information",

emergency:"Emergency Numbers"


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

emergency:"Numeri di emergenza"


}


};





function changeLanguage(){


language = language==="en" ? "it" : "en";


document.querySelector(".language-btn").innerHTML =
language==="en" ? "🇬🇧 EN" : "🇮🇹 IT";



document.querySelectorAll("[data-i18n]").forEach(el=>{


let key=el.dataset.i18n;


el.innerHTML =
translations[language][key];


});


}








/* =========================
   DOUBLE CLICK ACTION
========================= */


let selectedAction=null;


function confirmAction(type,url){


let title=document.getElementById("confirm-title");

let text=document.getElementById("confirm-text");

let button=document.getElementById("continue-btn");



if(type==="booking"){


title.innerHTML="🏡 Booking";


text.innerHTML=

"Open Booking and reserve your stay at La Casetta Terrasini.";


}



if(type==="maps"){


title.innerHTML="📍 Google Maps";


text.innerHTML=

"Open navigation and find the exact location of the house.";


}



selectedAction=url;



document.getElementById("confirm-box").style.display="flex";



button.onclick=function(){

window.location.href=selectedAction;

};


}






function closePopup(){

document.getElementById("confirm-box").style.display="none";

}








/* =========================
   APP BUTTON
========================= */


function openAppConfirm(){



let popup=document.getElementById("app-info");


popup.style.display="flex";


}





function openApp(){



let ua=navigator.userAgent.toLowerCase();



if(ua.includes("android")){


window.location.href=

"https://play.google.com/store/apps/details?id=com.goodbarber.terrasini";


}


else if(

ua.includes("iphone") ||

ua.includes("ipad")

){


window.location.href=

"https://apps.apple.com/it/app/terrasini/id993594848";


}


else{


window.location.href=

"https://apps.apple.com/it/app/terrasini/id993594848";


}



}








/* =========================
   INFORMATION WINDOWS
========================= */


function openInfo(id){


document.getElementById(id).style.display="flex";


}



function closeInfo(id){


document.getElementById(id).style.display="none";


}






/* =========================
   CLOSE POPUPS CLICK OUTSIDE
========================= */


document.querySelectorAll(".popup").forEach(popup=>{


popup.addEventListener("click",function(e){


if(e.target===popup){


popup.style.display="none";


}



});


});
