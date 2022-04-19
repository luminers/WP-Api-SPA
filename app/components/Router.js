import wp_api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";

const d=document;  

export function Router(){
let w=window;
let {hash}=location;

console.log(hash);

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



}