const api_key = "6c9cf5367e875bec8ea54c98d64a0e61";

let boton = document.getElementById("btn_consultar");

boton.onclick = function(){
	
	let ciudad = document.getElementById("campo_ciudad").value;
	let units = "metric"
	let lang = "es";
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}&units=${units}&lang=${lang}`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			cargar_datos(data);
		}) 
		.catch(error => {
			console.log("algo pasó", error);
		});


};

function cargar_datos(data){
	let campo_temp = document.getElementById("label_temp");
	let campo_desc = document.getElementById("label_desc");
	let campo_hum = document.getElementById("label_humedad");
	let campo_vie = document.getElementById("label_viento");


	let temperatura = data.main.temp;

	let descripcion = data.weather[0].description;

	let humedad = data.main.humidity;

	let viento = data.wind.speed;

	campo_temp.innerHTML = "Temperatura: " + formatearTexto(temperatura);
	campo_desc.innerHTML = "Descripcion: " + formatearTexto(descripcion);
	campo_hum.innerHTML = "Humedad: " + formatearTexto(humedad);
	campo_vie.innerHTML = "Viento: " + formatearTexto(viento);

}






let botonDos = document.getElementById("btn_consultarDos");

botonDos.onclick = function(){
	
	let ciudad = document.getElementById("campo_ciudadDos").value;
	let units = "metric"
	let lang = "es";
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}&units=${units}&lang=${lang}`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			cargar_datosDos(data);
		}) 
		.catch(error => {
			console.log("algo pasó", error);
		});


};

function cargar_datosDos(data){
	let campo_temp = document.getElementById("label_tempDos");
	let campo_desc = document.getElementById("label_descDos");
	let campo_hum = document.getElementById("label_humedadDos");
	let campo_vie = document.getElementById("label_vientoDos");


	let temperatura = data.main.temp;

	let descripcion = data.weather[0].description;

	let humedad = data.main.humidity;

	let viento = data.wind.speed;

	campo_temp.innerHTML = "Temperatura: " + formatearTexto(temperatura);
	campo_desc.innerHTML = "Descripcion: " + formatearTexto(descripcion);
	campo_hum.innerHTML = "Humedad: " + formatearTexto(humedad);
	campo_vie.innerHTML = "Viento: " + formatearTexto(viento);
}



let botonTres = document.getElementById("btn_consultarTres");

botonTres.onclick = function(){
	
	let ciudad = document.getElementById("campo_ciudadTres").value;
	let units = "metric"
	let lang = "es";
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}&units=${units}&lang=${lang}`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			cargar_datosTres(data);
		}) 
		.catch(error => {
			console.log("algo pasó", error);
		});


};

function cargar_datosTres(data){


	let campo_temp = document.getElementById("label_tempTres");
	let campo_desc = document.getElementById("label_descTres");
	let campo_hum = document.getElementById("label_humedadTres");
	let campo_vie = document.getElementById("label_vientoTres");


	let temperatura = data.main.temp;

	let descripcion = data.weather[0].description;

	let humedad = data.main.humidity;

	let viento = data.wind.speed;


	campo_temp.innerHTML = "Temperatura: " + formatearTexto(temperatura);
	campo_desc.innerHTML = "Descripcion: " + formatearTexto(descripcion);
	campo_hum.innerHTML = "Humedad: " + formatearTexto(humedad);
	campo_vie.innerHTML = "Viento: " + formatearTexto(viento);
}


function formatearTexto(texto) {
  return `<span class="texto-pequeno">${texto}</span>`;
}



let botonLimpiar = document.getElementById("btn_limpiar");

botonLimpiar.onclick = function(){

	document.getElementById("campo_ciudad").value = "";


	let campo_temp = document.getElementById("label_temp");
	let campo_desc = document.getElementById("label_desc");
	let campo_hum = document.getElementById("label_humedad");
	let campo_vie = document.getElementById("label_viento");


	campo_temp.innerHTML = "Temperatura: ";
	campo_desc.innerHTML = "Descripcion: ";
	campo_hum.innerHTML = "Humedad: ";
	campo_vie.innerHTML = "Viento: ";


}


let botonLimpiarDos = document.getElementById("btn_limpiarDos");

botonLimpiarDos.onclick = function(){

	document.getElementById("campo_ciudadDos").value = "";


	let campo_temp = document.getElementById("label_tempDos");
	let campo_desc = document.getElementById("label_descDos");
	let campo_hum = document.getElementById("label_humedadDos");
	let campo_vie = document.getElementById("label_vientoDos");


	campo_temp.innerHTML = "Temperatura: ";
	campo_desc.innerHTML = "Descripcion: ";
	campo_hum.innerHTML = "Humedad: ";
	campo_vie.innerHTML = "Viento: ";


}


let botonLimpiarTres = document.getElementById("btn_limpiarTres");

botonLimpiarTres .onclick = function(){

	document.getElementById("campo_ciudadTres").value = "";


	let campo_temp = document.getElementById("label_tempTres");
	let campo_desc = document.getElementById("label_descTres");
	let campo_hum = document.getElementById("label_humedadTres");
	let campo_vie = document.getElementById("label_vientoTres");


	campo_temp.innerHTML = "Temperatura: ";
	campo_desc.innerHTML = "Descripcion: ";
	campo_hum.innerHTML = "Humedad: ";
	campo_vie.innerHTML = "Viento: ";


}