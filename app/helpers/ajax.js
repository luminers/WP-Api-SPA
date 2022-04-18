export function ajax(props) {
    let {url, cbSucces}=props;

    fetch(url)
    .then(res => res.ok ? res.json(): Promise.reject(res))
    .then(json => cbSucces(json))
    .catch(err =>{
        let message=err.statusText || "Ocurrio un problema";

        document.getElementById("root").innerHTML=
        `
        <div class="error">
            <p>Error ${err.status}: ${message}</p>
        </div>
        `
        console.log(err);

    })


}