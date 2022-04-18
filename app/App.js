//Componente padre
import {
    Loader
} from "./components/Loader.js";
import {
    Header
} from "./components/Header.js";
import {
    Posts
} from "./components/Posts.js";

import { Router } from "./components/Router.js";

export function App() {

    const d = document,
        $root = d.getElementById("root");

    $root.appendChild(Header());
    $root.appendChild(Loader());
    $root.appendChild(Posts());

    Router();
    



}