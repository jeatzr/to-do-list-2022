//to do list

window.addEventListener("load", e => {
    const formulario = document.getElementById("formulario");
    const listaTareas = document.getElementById("lista-tareas");
    const input = document.getElementById("input")
    const plantilla = document.getElementById("temp").content;

    let contador = 0; 

    //implementación en memoria de la lista de tareas
    let tareas = [];


    formulario.addEventListener("submit", e => {
        e.preventDefault();
        setTarea(e);
    });

    function pintarTareas(e) {
        const fragmento = document.createDocumentFragment();
        
        listaTareas.innerHTML = "";

        tareas.forEach(tarea => {

            //parrafo = document.createElement("p");
            //const alert = document.createElement("div");
            //alert.classList = "alert alert-warning";

            plantilla.querySelector(".alert p").textContent = tarea.descripcion;
            const clon = plantilla.cloneNode(true);

            fragmento.append(clon);

        })

        listaTareas.append(fragmento);

    }

    function setTarea(e) {

        if (input.value)
        {
            const tarea = {
                id: contador,
                descripcion: input.value,
                completada: false
            }
            contador++;
            tareas.push(tarea);
            console.log(tareas);
            pintarTareas(e);

        } else {
            console.log("no hay tarea");
        }
        
    }

});