export function Form() {

    const $form=document.createElement("form"),
    $input=document.createElement("input");

    $input.name="search";
    $input.type="search";
    $form.classList.add("search-form");
    $form.innerHTML="Formulario de busqueda";
    $input.placeholder="Buscar..."
    $form.appendChild($input);

    return $form;
}