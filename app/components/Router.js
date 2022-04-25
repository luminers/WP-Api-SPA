import wp_api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";



export function Router(){
const d=document;  
let w=window;
const $posts=d.getElementById("posts");
let {hash}=location;


if (!hash || hash==="#/") {
    ajax({
        url: wp_api.POSTS,
        cbSucces: (posts) => {
            console.log(posts)
            let postHtml = "";

            posts.forEach((post) => (postHtml += PostCard(post)));
          

            d.querySelector(".loader").style.display = "none";
            d.getElementById("posts").innerHTML = postHtml;


        }
    });
}else if(hash.includes("#/Busqueda")){
    $posts.innerHTML="<h2>Seccion de busqueda</h2>";
}else if(hash==="#/contacto"){
    $posts.innerHTML="<h2>Seccion de contacto</h2>";
}else{
    $posts.innerHTML="<h2>Previamente seleccionado</h2>";
}








console.log(hash);




}