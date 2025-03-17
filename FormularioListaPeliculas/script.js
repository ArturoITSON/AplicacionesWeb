

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
	//Ayuda a que no se actualicen los campos
	e.preventDefault();
	let pelicula = {
		titulo: document.getElementById("titulo").value,
		anio: document.getElementById("anio").value,
		genero: document.getElementById("genero").value,
		director: document.getElementById("director").value,
		duracion: document.getElementById("duracion").value,
		clasificacion: document.getElementById("clasificacion").value
	};


	document.getElementById("titulo").style.border = "";
	document.getElementById("anio").style.border = "";
	document.getElementById("director").style.border = "";
	document.getElementById("duracion").style.border = "";
	document.getElementById("clasificacion").style.border = "";
	document.getElementById("genero").style.border = "";


	if (!pelicula.titulo.trim()){
	 	document.getElementById("titulo").style.border = "2px solid red";
	 	return;
	}
	if (!pelicula.anio.trim()){
	 	document.getElementById("anio").style.border = "2px solid red";
	 	return;
	}
	if (!pelicula.director.trim()){ 
		document.getElementById("director").style.border = "2px solid red";
		return;
	}
	if (!pelicula.duracion.trim()){ 
		document.getElementById("duracion").style.border = "2px solid red";
		return;
	}
	if (!pelicula.clasificacion.trim()){
	 	document.getElementById("clasificacion").style.border = "2px solid red";
	 	return;
	}
	if (pelicula.genero === "Seleccione"){ 
		document.getElementById("genero").style.border = "2px solid red";
		return;
	}

	agregarTabla(pelicula);

	e.target.reset("");

});

function agregarTabla(pelicula){

		let boton_editar = document.createElement("button");
	    let boton_eliminar = document.createElement("button");

	    boton_editar.textContent = "Editar";
	    boton_eliminar.textContent = "Eliminar";

	    boton_editar.classList.add("btn", "btn-primary");
	    boton_eliminar.classList.add("btn", "btn-danger");

	let cuerpo_tabla = document.getElementById("cuerpo_tabla");

	let fila = document.createElement("tr");

	for(let key in pelicula){



		let campo = document.createElement("td");

		campo.textContent = pelicula[key];
		fila.appendChild(campo);

		fila.appendChild(boton_editar);
		fila.appendChild(boton_eliminar);



		boton_eliminar.onclick = function () {
	        fila.remove();
	    };

	    boton_editar.onclick = function () {

	        activarEdicion(fila);

	    };

	}

	cuerpo_tabla.appendChild(fila);


}


function activarEdicion(fila) {
    let celdas = fila.cells;
    
    for (let i = 0; i < celdas.length; i++) { // No tocar la última celda con los botones
        let valorActual = celdas[i].textContent;
        celdas[i].innerHTML = `<input type="text" value="${valorActual}">`;
    }

    // Reemplazar botón "Editar" por "Guardar"
    let botonEditar = fila.querySelector(".btn-primary");
    botonEditar.textContent = "Guardar";
    botonEditar.onclick = function() { 
    	guardarEdicion(fila);

    };
}

function guardarEdicion(fila) {
    let celdas = fila.cells;
    
    for (let i = 0; i < celdas.length; i++) { // No tocar la última celda con los botones
        let input = celdas[i].querySelector("input");
        if (input) {
            celdas[i].textContent = input.value;
        }
    }

    // Cambiar el botón "Guardar" de nuevo a "Editar"
    let botonGuardar = fila.querySelector(".btn-primary");
    botonGuardar.textContent = "Editar";
    botonGuardar.onclick = function() { activarEdicion(fila); };
}