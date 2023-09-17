// https://kontests.net/api/v1/all


let card=document.getElementsByClassName("card-container")[0]
let coding=document.getElementById("coding");
let site=document.getElementById("site");
let name=document.getElementById("name");
let starttime=document.getElementById("start-time");
let endtime=document.getElementById("end-time");
let duration=document.getElementById("duration");
let hours=document.getElementById("hours");

let link=document.getElementById("link");



function fetch_from_api_and_print(){
    let p1=fetch("https://kontests.net/api/v1/all");
    p1.then(function(value){
        return value.json()
    }).then(function(value){
        console.table(value);
        
       
        
        // card.innerHTML=" card container"
        for(keys in value){
        let card_container=document.createElement("div")
       
        card_container.classList.add("card");
        card_container.classList.add("card-container")
        
        card_container.innerHTML=`<div class="Photo"> </div><div class="status"><span id="coding">${value[keys].site}</span><span id="site">${value[keys].status}</span></div><br><div class="name-of-contest"><h3 id="name">${value[keys].name}</h3><br><p id="start-time">Start_time:${(value[keys].start_time).slice(0, -5)}</p><p id="end-time">End_time:${(value[keys].end_time).slice(0, -5)}</p><p id="duration">Duration:${Math.round(value[keys].duration/3600)} Hours</p> <p id="hours">In_24_hours:${value[keys].in_24_hours}</p> <button id="explore2"> <a id="link" href="${value[keys].url}" target="_blank">Explore</a></button> </div></div>`
        
        document.body.firstElementChild.appendChild(card_container);

        }

       

    })
}







fetch_from_api_and_print()

