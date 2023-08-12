//OBJETOS

const marioBros = {
  titulo: "Super Mario Bros: La película.",
  duracion: "1h 32m",
  fecha: "Lun 15 de Mayo",
  hora: "1:30 pm",
  sala: 5,
  idioma: "ESP",
};

const suzume = {
  titulo: "Suzume",
  duracion: "2h 2m",
  fecha: "Lun 15 de Mayo",
  hora: "5:00 pm",
  sala: 3,
  idioma: "SUB",
};

const antman = {
  titulo: "Ant-Man y la Avispa: Quantumanía",
  duracion: "2h 5m",
  fecha: "Lun 15 de Mayo",
  hora: "9:15 pm",
  sala: 1,
  idioma: "ESP",
};

//VARIABLES
const contenedorPeliculas = document.getElementById("contenedor-peliculas");
const btnMostrarCompra = document.getElementById("btn-mostrar-compra");
const contenedorCompra = document.getElementById("contenedor-compra");
const botonContinuar = document.getElementById("btn-continuar-compra");
const contenedorButacas = document.getElementById("contenedor-butacas");
const btnImprimirFactura = document.getElementById("imprimir-factura");
const contenedorFactura = document.getElementById("contenedor-factura");
const botonCotinuarFormulario = document.getElementById(
  "btn-continuar-butacas"
);
const iconosButacas = document.getElementsByClassName("icono-butaca");
const contenedorFormulario = document.getElementById("contenedor-formulario");
const btnGenerarPrecio = document.getElementById("btn-generar-precio");
const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");
const spanNumeroBoletos = document.getElementById("numero-boletos");
let cantidadDeBoletos = 1;
let precioBoletos = sessionStorage.getItem("Precio");
document.getElementById("contenedor-precio").innerHTML = ` ${precioBoletos}$`;
let butacasSeleccionadas = 0;
let butacasElegidas = [];

//EVENTLISTENER
contenedorPeliculas.addEventListener("click", seleccionarPelciula);
btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnImprimirFactura.addEventListener("click", imprimirFactura);
botonCotinuarFormulario.addEventListener("click", validarButaca);

//FUNCIONES

//Selecionar Peliculas boton
function seleccionarPelciula(e) {
  e.preventDefault();
  const contenedorFuncion = document.getElementById("contenedor-funcion");

  if (e.target.classList.contains("btn-mario")) {
    contenedorFuncion.classList.remove("d-none");
    mostrarDatosPelicula(marioBros);
  }
  if (e.target.classList.contains("btn-suzume")) {
    contenedorFuncion.classList.remove("d-none");
    mostrarDatosPelicula(suzume);
  }
  if (e.target.classList.contains("btn-antman")) {
    contenedorFuncion.classList.remove("d-none");
    mostrarDatosPelicula(antman);
  }
}

mostrarContenedores(btnMostrarCompra, contenedorCompra);

//CONTADOR
function sumar() {
  if (cantidadDeBoletos < 10) {
    cantidadDeBoletos++;
    spanNumeroBoletos.innerHTML = cantidadDeBoletos;
  }
}
function restar() {
  if (cantidadDeBoletos > 1) {
    cantidadDeBoletos--;
    spanNumeroBoletos.innerHTML = cantidadDeBoletos;
  }
}

//Imprimir Factura
function imprimirFactura(e) {
  e.preventDefault();
  let valorNombre = document.getElementById("inputNombre").value;
  let valorApellido = document.getElementById("inputApellido").value;
  let valorID = document.getElementById("inputID").value;
  let valorDireccion = document.getElementById("inputDireccion").value;
  let valorCorreo = document.getElementById("inputCorreo").value;
  let valorCodigoTlf = document.getElementById("inputSelector").value;
  let valorTlf = document.getElementById("inputTelefono").value;

  document.getElementById(
    "factura-nombre"
  ).innerHTML = `${valorNombre} ${valorApellido}`;
  document.getElementById("factura-id").innerHTML = valorID;
  document.getElementById("factura-direccion").innerHTML = valorDireccion;
  document.getElementById("factura-correo").innerHTML = valorCorreo;
  document.getElementById(
    "factura-telefono"
  ).innerHTML = `${valorCodigoTlf}-${valorTlf}`;
  document.getElementById("factura-precio").innerHTML = ` ${precioBoletos}$`;
  document.getElementById(
    "factura-boletos"
  ).innerHTML = `${cantidadDeBoletos}x`;
  document.getElementById("factura-total").innerHTML = `${
    precioBoletos * cantidadDeBoletos
  }$`;
  document.getElementById("factura-butacas").innerHTML = butacasElegidas;
}

mostrarContenedores(btnImprimirFactura, contenedorFactura);

function mostrarDatosPelicula(objeto) {
  document.getElementById("nombre-pelicula").innerHTML = objeto.titulo;
  document.getElementById("fecha-pelicula").innerHTML = objeto.fecha;
  document.getElementById("hora-pelicula").innerHTML = objeto.hora;
  document.getElementById("duracion-pelicula").innerHTML = objeto.duracion;
  document.getElementById("sala-pelicula").innerHTML = objeto.sala;
  document.getElementById("idioma-pelicula").innerHTML = objeto.idioma;

  document.getElementById(
    "factura-pelicula"
  ).innerHTML = `${objeto.titulo} (${objeto.idioma})`;
  document.getElementById("factura-hora").innerHTML = objeto.hora;
  document.getElementById("factura-sala").innerHTML = objeto.sala;
}

//Validar BUTACAS
function validarButaca(e) {
  const alert = document.querySelector(".alert");
  e.preventDefault();
  if (butacasElegidas.length > 0) {
    contenedorFormulario.classList.remove("d-none");
    alert.classList.add("d-none");
  } else {
    alert.classList.remove("d-none");
  }
}
function mostrarContenedores(boton, contenedor) {
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    contenedor.classList.remove("d-none");
  });
}

mostrarContenedores(botonContinuar, contenedorButacas);

function seleccionarButacas() {
  for (let i = 0; i < iconosButacas.length; i++) {
    iconosButacas[i].addEventListener("click", function () {
      if (
        iconosButacas[i].classList.contains("disponible") &&
        butacasSeleccionadas < cantidadDeBoletos
      ) {
        butacasSeleccionadas++;
        iconosButacas[i].classList.remove("disponible");
        iconosButacas[i].classList.add("seleccionado");
        butacasElegidas.push(iconosButacas[i].getAttribute("numero-butaca"));
      } else if (iconosButacas[i].classList.contains("seleccionado")) {
        butacasSeleccionadas--;
        iconosButacas[i].classList.remove("seleccionado");
        iconosButacas[i].classList.add("disponible");
        let butacaEliminar = iconosButacas[i].getAttribute("numero-butaca");
        let index = butacasElegidas.indexOf(butacaEliminar);
        if (index > -1) {
          butacasElegidas.splice(index, 1);
        }
      }
    });
  }
}
seleccionarButacas();
