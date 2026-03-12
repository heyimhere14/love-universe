window.addEventListener("load",()=>{

const music=document.getElementById("bgMusic");
music.volume=0.4;

const playPromise=music.play();

if(playPromise!==undefined){

playPromise.catch(()=>{
document.body.addEventListener("click",()=>music.play(),{once:true});
});

}

});

const target=new Date("March 14, 2026 00:00:00").getTime();

setInterval(()=>{

const now=new Date().getTime();
const diff=target-now;

const days=Math.floor(diff/(1000*60*60*24));
const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

document.getElementById("countdown").innerHTML=
days+" days "+hours+" hours left";

},1000);

function openGift(){

document.querySelector(".start").style.display="none";
document.getElementById("content").classList.remove("hidden");

}

const memories={
1:"The cuteness of the little one that melts my heart.",
2:"The happiness I feel when you rest on my shoulder.",
3:"The beauty of you in a saree that took my breath away.",
4:"The cuteness you added into my life.",
5:"Those looks that steal my mind.",
6:"The closeness between us.",
7:"Your style and cuteness.",
8:"Standing together growing together.",
9:"Those eyes I could look at forever."
};

function showMemory(num){

document.getElementById("popupText").innerText=memories[num];
document.getElementById("popup").style.display="flex";

setTimeout(()=>{
document.getElementById("popup").style.display="none";
},2000);

}

function stopMusic(){
document.getElementById("bgMusic").pause();
}
