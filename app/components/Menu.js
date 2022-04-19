export function Menu() {

    const $menu=document.createElement("nav");
    $menu.classList.add("menu")
    $menu.innerHTML=`
    <a href="#/Home">Home</a>
    <a href="#/Busqueda">Busqueda</a>
    <a href="#/GitHub">Aprende JS</a>
    <a href="#/Contacto">Contacto </a>

    `;

    return $menu;
}