class Producto {
    constructor(codigo, nombre, precio, cantidad, categoria) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Inventario {
    constructor() {
        this.productos = new Map();
    }

    agregarProducto(producto) {
        if (this.productos.has(producto.codigo)) {
            return false;
        }
        this.productos.set(producto.codigo, producto);
        return true;
    }
}

const inventario = new Inventario();
const messageDiv = document.getElementById('message');

function showMessage(message, isSuccess) {
    messageDiv.textContent = message;
    messageDiv.className = isSuccess ? 'success' : 'error';
    messageDiv.style.display = 'block';

    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}

document.getElementById('addProductButton').addEventListener('click', function() {
    const codigo = document.getElementById('code').value;
    const nombre = document.getElementById('name').value;
    const precio = parseFloat(document.getElementById('price').value);
    const cantidad = parseInt(document.getElementById('quantity').value);
    const categoria = document.getElementById('category').value;

    const nuevoProducto = new Producto(codigo, nombre, precio, cantidad, categoria);

    if (inventario.agregarProducto(nuevoProducto)) {
        showMessage('Producto agregado correctamente', true);
        document.getElementById('productForm').reset(); // Limpiar el formulario
    } else {
        showMessage('Error: El código del producto ya existe', false);
    }
});

/*
Para saber cuales productos se encuentran en el map, esta este for para iterar sobre el map.

inventario.productos.forEach((producto, codigo) => {
    console.log(`Código: ${codigo}, Producto:`, producto);
});

*/