//to do list

window.addEventListener("load", e => {
    const formulario = document.getElementById("formulario");
    const listaTareas = document.getElementById("lista-tareas");
    const input = document.getElementById("input")
    const plantilla = document.getElementById("temp").content;

    let contador = 0; 

    //implementación en memoria de la lista de tareas
    let tareas = [];


    //funciones que dan cobertura a los eventos
    formulario.addEventListener("submit", e => {
        e.preventDefault();
        setTarea(e);
    });

    listaTareas.addEventListener("click", e => {

        if (e.target.classList.contains("fa-check")) {
            //console.log(`tarea ${e.target.dataset.id} completada`);
            tareas[e.target.dataset.id].completada = true;
            pintarTareas(e);
        } else {
            if (e.target.classList.contains("fa-xmark")) {
                tareas[e.target.dataset.id].completada = false;
                pintarTareas(e);

            } else {
                if (e.target.classList.contains("fa-delete-left"))
                {
                    delete tareas[e.target.dataset.id];
                    console.log(tareas);
                    pintarTareas(e);
                }
            }
        }


    });



    function pintarTareas(e) {
        const fragmento = document.createDocumentFragment();
        
        listaTareas.innerHTML = "";

        tareas.forEach(tarea => {

            //parrafo = document.createElement("p");
            //const alert = document.createElement("div");
            //alert.classList = "alert alert-warning";

            plantilla.querySelector(".alert p").textContent = tarea.descripcion;
            plantilla.querySelectorAll("i")[0].dataset.id = tarea.id;
            plantilla.querySelectorAll("i")[1].dataset.id = tarea.id;

            const clon = plantilla.cloneNode(true);

            if (tarea.completada)
            {
                
                const alerta = clon.querySelector(".alert-warning");
                alerta.classList.replace("alert-warning", "alert-success");
                alerta.classList.add("completada");
                clon.querySelector(".fa-check").classList.replace("fa-check","fa-xmark");

            }

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