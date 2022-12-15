# Carrito de Compras

Carrito de compras con las siguientes funcionalidades.

1. Inicio de Sesión
    
2. Agregar productos al carrito

3. Pagar

4. Cerrar Sesión


## 1. Iniciar Sesion
Con local storage, creando el objeto newClient. El usuario debe de dar click en el boton iniciar sesión ejecutando la función de iniciarSesion().

## 2. Agregar productos al carrito
El cliente puede ir sumando productos al carrito, los cuales se irán contabilizando con la función sumarProducto(), así como también podrá quitar productos del carrito si así lo desea mediante la función restarProducto().

## 3. Pagar
Suma los valores del carrito y los almacena en un array historialCompras[] y cierra la sesión, removiendo el localstorage.

## 4. Cerrar Sesión
Con local storage. El usuario debe de dar click en el boton cerrar sesión ejecutando la función de cerrarSesion() y reinicia los valores del carrito.
