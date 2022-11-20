let sumaTotal = 0;
let user="";
let password="";
let newClient;
let historialCompras=[];
let carritoArray=[]

function login(){
	do {
		alert("Registrate ingresando un nombre y contraseña.");
		user = prompt("Ingresa tu usuario");
		password = prompt("Ingresa tu contraseña");
		if ((user!="")&&(password!="")) {
			newClient = new Client(user, password);
			document.getElementById("name").innerHTML = newClient.nameFinal;
			localStorage.setItem("usuario", JSON.stringify(newClient));
		
		}
	} while ((user=="") || (password == ""));
}


function sumarProducto(event) {
	let dropdownMenu = document.getElementById("dropdown-menu");
	alert("Producto agregado con valor de " + event.value);
	let valor = parseInt(event.value)
	sumaTotal = parseInt(sumaTotal) + valor;
	document.getElementById("sumaTotal").innerHTML = sumaTotal;
	
	//Crear lista individual del carrito
	let liElementoCarrito= document.createElement("li");
	liElementoCarrito.setAttribute("product-id",event.getAttribute("product-id"));


	//crear a individual del carrito
	let aElementoIndividual = document.createElement("a");
	aElementoIndividual.classList.add("dropdown-item");

	//crear titulo
	let nombreProducto= document.createElement("span");
	nombreProducto.innerHTML= event.getAttribute("title");
	
	//Precio producto 
	let precioProducto = document.createElement("span");
	precioProducto.innerHTML= "$ "+ event.getAttribute("value");

	//Imagen Producto
	let imagenProducto = document.createElement("img");
	imagenProducto.src=event.getAttribute("src");
	imagenProducto.classList.add("img-fluid");

	//ID Producto
	let idProducto = event.getAttribute("product-id");

	//Cantidad producto
	let productoCantidad = document.createElement("span");
	productoCantidad.classList.add("cantidad");
	productoCantidad.innerHTML= "1";
	
	//Boton de restar
	let buttonRestar = document.createElement("button");
	buttonRestar.classList.add("btn","btn-danger");
	buttonRestar.setAttribute("value",event.getAttribute("value"));
	buttonRestar.setAttribute("onClick","restarProducto(this)");
	buttonRestar.innerHTML="-";
	buttonRestar.setAttribute("src",event.getAttribute("src"));
	buttonRestar.setAttribute("product-id",event.getAttribute("product-id"));
	buttonRestar.setAttribute("title",event.getAttribute("title"));      	
	
	if(carritoArray.includes(idProducto)){
		console.log(idProducto);
		let selectorActual = document.querySelector(".dropdown-menu li[product-id="+"'"+idProducto+"'"+"] .cantidad");
		selectorActual.innerHTML = parseInt(selectorActual.innerHTML) + 1;
	}else{
		aElementoIndividual.append(nombreProducto, precioProducto, imagenProducto, productoCantidad, buttonRestar);
		liElementoCarrito.append(aElementoIndividual);
		dropdownMenu.append(liElementoCarrito);
		carritoArray.push(idProducto);

	}








	
}

function restarProducto(event) {
	alert("Producto eliminado");

	let idProducto = event.getAttribute("product-id");
	let liListaSeleccionada = document.querySelector(".dropdown-menu li[product-id="+"'"+idProducto+"'"+"]");
	let cantidad = document.querySelector(".dropdown-menu li[product-id="+"'"+idProducto+"'"+"] .cantidad");
	if(parseInt(cantidad.innerHTML)==1){
		liListaSeleccionada.remove();
	
	}else{
		cantidad.innerHTML = parseInt(cantidad.innerHTML)-1;

	}
	let valor = parseInt(event.value);
	sumaTotal = parseInt(sumaTotal) - valor;
	if (sumaTotal <= 0) {
		sumaTotal = 0;
		document.getElementById("sumaTotal").innerHTML = 0;
	} else {
		document.getElementById("sumaTotal").innerHTML = sumaTotal;
	}		
	carritoArray.indexOf(parseInt(idProducto));
	const index = carritoArray.indexOf(2);
	carritoArray.splice(index, 1);
}


var button = document.getElementById("pagarBoton");
button.addEventListener("click", function(event){
	cerrarSesion();
	alert("Compra realizada con exito. ¡Vuelve pronto!")
});
function toggleElements(){
	var element = document.getElementById("cerrarSesion");
  	element.classList.toggle("d-none"); 	
	var element = document.getElementById("iniciarSesion");
  	element.classList.toggle("d-none"); 	  	
	var element = document.getElementById("pagarBoton");
  	element.classList.toggle("d-none");   	
}

//Funcion para iniciar sesión
function iniciarSesion(){
 	login();
	toggleElements();
}
function cerrarSesion(){
	if (localStorage.getItem("usuario") === null) {

	}	else {
		alert("Compra realizada con exito. ¡Vuelve pronto!");
		newClient.montoCompra = document.getElementById("sumaTotal").innerHTML;
		historialCompras.push(newClient);
		document.getElementById("sumaTotal").innerHTML=0;
		sumaTotal = 0;
		document.getElementById("name").innerHTML="";
		console.log(historialCompras);
		window.localStorage.removeItem('usuario');		
		toggleElements();
		document.querySelector(".dropdown-menu li").remove();

	}

}



//Pagar al momento de dar click
function pagar(){
	newClient.montoCompra = document.getElementById("sumaTotal").innerHTML;
	historialCompras.push(newClient);
	document.getElementById("sumaTotal").innerHTML=0;
	document.getElementById("name").innerHTML="";
	document.querySelector(".dropdown-menu li").remove();
	console.log(historialCompras);
	alert("Compra realizada con exito. ¡Vuelve pronto!")
	login();
}

//Hacer fetch a mi productos.json


