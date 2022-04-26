import wp_api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";



export async function Router(){
const d=document;  
let w=window;
const $main=d.getElementById("main");
let {hash}=location;


if (!hash || hash==="#/" || hash==="#/Inicio") {
    await ajax({
        url: wp_api.POSTS,
        cbSucces: (posts) => {
            console.log(main)
            let postHtml = "";

            posts.forEach((post) => (postHtml += PostCard(post)));
          

            d.querySelector(".loader").style.display = "none";
            d.getElementById("main").innerHTML = postHtml;


        }
    });
}else if(hash.includes("#/Busqueda")){
    $main.innerHTML="<h2>Seccion de busqueda</h2>";
}else if(hash==="#/contacto"){
    $main.innerHTML="<h2>Seccion de contacto</h2>";
}else{
    $main.innerHTML="<h2>Previamente seleccionado</h2>";
}

d.querySelector(".loader").style.display="none"






console.log(hash);




}