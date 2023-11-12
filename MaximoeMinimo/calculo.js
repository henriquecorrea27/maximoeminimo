function calcular() {
  var areaInput = document.getElementById("area");
  var area = parseFloat(areaInput.value);

  var resultado = area * 2;

  document.getElementById("resultado").textContent = "O dobro é: " + resultado;
}
