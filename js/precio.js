const btnGenerarPrecio = document.getElementById("btn-generar-precio");

btnGenerarPrecio.addEventListener("click", generarPrecio);

function generarPrecio() {
  let valorPrecio = document.getElementById("inputPrecio").value;
  sessionStorage.setItem("Precio", valorPrecio);
  location.href = "./peliculas.html";
}
