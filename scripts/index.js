import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();


let mens=document.getElementById("a")
mens.addEventListener("click",fun)

let divdd=document.getElementById("divdd")

function fun(){
   let h1=document.createElement("h1")
   h1.innerText="akash"

   divdd.append(h1);
}