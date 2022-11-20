

fetch('clases/products.json')
  .then(response => response.json())
  .then(data => {
	let listadoProductos = document.getElementById("listProducts");
	let listadoProductosSlider = document.getElementById("splide__list");

		for(let i=0; i < data.products.length;i++){
				let productClass = new Product(data.products[i].id,data.products[i].title, data.products[i].price,data.products[i].images[0] )
				let liProduct = document.createElement("div");
				liProduct.classList.add("card");
				liProduct.style.width="18rem"
				
				//Crear elemento div con clase card-body
				let liBody = document.createElement("div");
				liBody.classList.add("card-body","clase-ejemplo");

				//Crear elemento span
				let spanId = document.createElement("div");
				spanId.classList.add("id");
				spanId.innerHTML= productClass.id;
	

				let spanTitle = document.createElement("h5");
				spanTitle.classList.add("card-title","h5","mr-3");
				spanTitle.innerHTML= productClass.title;
	
				let spanPrice = document.createElement("h6");
				spanPrice.classList.add("price");
				spanPrice.innerHTML= "$"+ productClass.price;
	
				//Crear mi boton de añadir al carrito
				let buttonSumar = document.createElement("button");
				buttonSumar.classList.add("btn","btn-success");
				buttonSumar.setAttribute("value",productClass.price);
				buttonSumar.setAttribute("onClick","sumarProducto(this)");
				buttonSumar.innerHTML="Añadir al Carrito";
				buttonSumar.setAttribute("src",productClass.images);
				buttonSumar.setAttribute("product-id",productClass.id);
				buttonSumar.setAttribute("title",productClass.title);                
	
				//Crear mi boton de restar producto
				// let buttonRestar = document.createElement("button");
				// buttonRestar.classList.add("btn","btn-danger");
				// buttonRestar.setAttribute("value",productClass.price);
				// buttonRestar.setAttribute("onClick","restarProducto(this)");
				// buttonRestar.innerHTML="Añadir al Carrito";
				// buttonRestar.setAttribute("src",productClass.images);
				// buttonRestar.setAttribute("product-id",productClass.id);
				// buttonRestar.setAttribute("title",productClass.title);          


				//Crear imagen de mi producto
				let imagenProducto = document.createElement("img");
				imagenProducto.classList.add("card-img-top");
				imagenProducto.setAttribute("src",productClass.images);



							
				if(i>0 && i<15){
					liBody.append( spanTitle,spanPrice,buttonSumar);
					liProduct.append(imagenProducto,liBody);
					listadoProductos.append(liProduct);	
				}else{
					let splideContainer = document.createElement("div");
					splideContainer.classList.add("splide__slide", "text-center");
					liProduct.classList.add("splide__slide","text-center");
					liBody.append( spanTitle ,spanPrice,buttonSumar);
					liProduct.append(imagenProducto,liBody);
					splideContainer.append(liProduct);					
					listadoProductosSlider.append(splideContainer);
				}

		}
		new Splide( '.splide', {
			type   : 'loop',
			perPage: 4,
		  } ).mount();
	}
);