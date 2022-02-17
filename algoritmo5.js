let precio = prompt("ingresa el precio del producto");

let descuento = prompt("ingresa porsentaje de descuento");

let costo = precio - (parseFloat(precio) * parseFloat(descuento) / 100);
alert(`El precio final del producto seria ${costo}`);