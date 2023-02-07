const textoInicioElement = document.getElementById("texto_inicio");
const textoFinalElement = document.getElementById("texto_final");

function ocultarMuneco() {
  textoFinalElement.classList.remove("mensaje-background");
}

function ocultarTexto() {
  document.getElementById("contenido_mensaje").classList.add("oculto");
}

function ocultarBoton() {
  document.getElementById("btn-copiar").classList.remove("oculto");
}

function obtenerTexto() {
  const texto_inicio = textoInicioElement.value;
  return texto_inicio;
}

function encriptar(texto) {
  let textoEncriptado = texto.replaceAll("e", "enter");
  textoEncriptado = textoEncriptado.replaceAll("i", "imes");
  textoEncriptado = textoEncriptado.replaceAll("a", "ai");
  textoEncriptado = textoEncriptado.replaceAll("o", "ober");
  textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
  return textoEncriptado;
}

function descencriptar(texto) {
  let textoDesencriptado = texto.replaceAll("enter", "e");
  textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
  textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
  textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
  textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");
  return textoDesencriptado;
}

function onEncriptarClick() {
  ocultarMuneco();
  ocultarBoton();
  ocultarTexto();
  const textoAEncriptar = obtenerTexto();
  textoFinalElement.innerText = encriptar(textoAEncriptar);
}

function onDesencriptarClick() {
  ocultarMuneco();
  const textoAdesencriptar = obtenerTexto();
  textoFinalElement.innerText = descencriptar(textoAdesencriptar);
}

function onCopiarClick() {
  navigator.clipboard.writeText(textoFinalElement.value);
  alert("Texto copiado");
}
