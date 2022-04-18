export function Menu() {

    const $menu=document.createElement("nav");
    $menu.classList.add("menu")
    $menu.innerHTML=`
    <a href="#/">Home</a>
    <a href="#/">Busqueda</a>
    <a href="#/">Aprende JS</a>

    `;


    return $menu;
}