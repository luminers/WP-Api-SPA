//Componente padre
import wp_api from "./helpers/wp_api.js";
import {
    ajax
} from "./helpers/ajax.js";

import {
    Loader
} from "./components/Loader.js";
import {
    Header
} from "./components/Header.js";
import {
    Posts
} from "./components/Posts.js";
import {
    PostCard
} from "./components/PostCard.js";

export function App() {

    const d = document,
        $root = d.getElementById("root");

    $root.appendChild(Header());
    $root.appendChild(Loader());
    $root.appendChild(Posts());

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