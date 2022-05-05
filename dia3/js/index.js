// 'use strict';

// import { Producto } from "./Producto.js";

// const documentReady = () =>{
//   const productos= [
//     new Producto("laptop",8000,"MSI","Tecnologia",10),
//     new Producto("Desktop",4000,"MSI","Tecnologia",15),
//     new Producto("Monitor",2000,"BenQ","Tecnologia",20),
//     new Producto("Impresora",750,"Epson","Tecnologia",10)
//   ];
//   console.log(productos);
// // const producto1=new Producto("laptop",8000,"MSI","Tecnologia",10);
// // const producto2=new Producto("Desktop",4000,"MSI","Tecnologia",15);
// // const producto3=new Producto("Monitor",2000,"BenQ","Tecnologia",20);
// // console.log(productos[0].nombre);
// // console.log(productos[0].nombre="impresora");
// // console.log(productos[2].id);

// const tBodyProducto = document.querySelector("#tBodyProducto");
// console.log(tBodyProducto);
// productos.forEach((element) => {
//   const { id, nombre, precio, marca, categoria, stock } = element;
//   tBodyProducto.innerHTML += `
//     <tr>
//       <th>${id}</th>
//       <td>${nombre}</td>
//       <td>${precio.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</td>
//       <td>${marca}</td>
//       <td>${categoria}</td>
//       <td>${stock}</td>
//     </tr>
//   `
// });

// }

// document.addEventListener("DOMContentLoaded",documentReady);

'use strict';
import { Producto } from "./Producto.js";

const documentReady = () => {
  const productos = [
    new Producto('Laptop', 8000, 'MSI', 'Tecnología', 10),
    new Producto('Desktop', 4000, 'Lenovo', 'Tecnología', 15),
    new Producto('Monitor', 2000, 'BenQ', 'Tecnología', 20)
  ];
  console.log(productos);

  const tBodyProducto = document.querySelector('#tBodyProducto');
  const formProducto = document.querySelector('#formProducto');
  const contenedorError = document.querySelector('#contenedorError');

  productos.forEach((element) => {
    const { id, nombre, precio, marca, categoria, stock } = element;
    tBodyProducto.innerHTML += `
      <tr>
        <th>${id}</th>
        <td>${nombre}</td>
        <td>${precio.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</td>
        <td>${marca}</td>
        <td>${categoria}</td>
        <td>${stock}</td>
      </tr>
    `
  });

  const frutas = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝'];
  console.log(frutas);


  // Create
  // Create
  const createProduct = (e) => {
    e.preventDefault();
    const documentFormProducto = document.forms['formProducto'];
    const nombre = documentFormProducto['nombre'].value;
    const precio = documentFormProducto['precio'].value;
    const marca = documentFormProducto['marca'].value;
    const categoria = documentFormProducto['categoria'].value;
    const stock = documentFormProducto['stock'].value;

    if ([nombre.trim(), precio.trim(), marca.trim(), categoria.trim(), stock.trim()].includes('')) {
      contenedorError.innerHTML = 'Completar todos los campos';
    } else {
      productos.push(new Producto(nombre, +precio, marca, categoria, +stock));
      //limpiamos el formulario
      documentFormProducto['nombre'].value='';
    documentFormProducto['precio'].value='';
  documentFormProducto['marca'].value='';
  documentFormProducto['categoria'].value='';
  documentFormProducto['stock'].value='';
      
      //console.log(productos);
      readProducts();
    }
  };
//read
  const readProducts = () => {
    tBodyProducto.innerHTML = '';

    productos.forEach((element) => {
      const { id, nombre, precio, marca, categoria, stock } = element;
      tBodyProducto.innerHTML += `
        <tr>
          <th>${id}</th>
          <td>${nombre}</td>
          <td>${precio.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</td>
          <td>${marca}</td>
          <td>${categoria}</td>
          <td>${stock}</td>
          <td><button>✏️</button>
          <button>🗑️</button></td>
        </tr>
      `
    });
  };

  readProducts();

  formProducto.addEventListener('submit', createProduct);
}

document.addEventListener('DOMContentLoaded', documentReady);