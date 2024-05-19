

let carrito = [];
let total = 0;

function mostrarOpciones() {
    return parseInt(
        prompt(
            "Bienvenido a nuestro e-commerce! \nSeleccione una opción:\n1. Agregar producto al carrito\n2. Ver total del carrito\n3. Finalizar compra"
        )
    );
}

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(mensaje);
}

function agregarAlCarrito() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });

    mensaje += "\nIngrese el número del producto que desea agregar al carrito:";
    const seleccion = parseInt(prompt(mensaje));

    if (seleccion >= 1 && seleccion <= productos.length) {
        const productoSeleccionado = productos[seleccion - 1];
        carrito.push(productoSeleccionado);
        alert(`${productoSeleccionado.nombre} agregado al carrito.`);
    } else {
        alert("Número de producto inválido!");
    }
}

function calcularTotal() {
    total = 0;
    carrito.forEach((producto) => {
        total += producto.precio;
    });

    let productosEnCarrito = carrito.map(producto => producto.nombre).join(", ");
    alert(`Total a pagar: $${total}\nProductos en el carrito: ${productosEnCarrito}`);
}

function finalizarCompra() {
    calcularTotal(); 

    let productosEnCarrito = carrito.map(producto => producto.nombre).join(", ");
    const confirmacion = confirm(
        `Desea finalizar la compra por un total de $${total}?\nProductos en el carrito: ${productosEnCarrito}`
    );

    if (confirmacion) {
        alert("Gracias por su compra!");
        carrito = [];
        total = 0;
    } else {
        alert("La compra ha sido cancelada!");
    }
}

function menu() {
    let continuar = true;
    while (continuar) {
        const opcion = mostrarOpciones();
        switch (opcion) {
            case 1:
                agregarAlCarrito();
                break;
            case 2:
                calcularTotal();
                break;
            case 3:
                finalizarCompra();
                continuar = false;
                break;
            default:
                alert("Opción inválida!");
        }
    }
}


menu();
