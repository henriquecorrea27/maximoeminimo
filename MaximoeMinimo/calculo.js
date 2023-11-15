function calcularVolume() {
  var areaInput = document.getElementById("area");
  var area = parseFloat(areaInput.value);

  var lado = Math.sqrt(area);

  var x = lado / 6;

  var volume = (lado - 2 * x) * (lado - 2 * x) * x;

  document.getElementById("resultado").textContent =
    "O volume max é: " + volume;
}

function redirecionarVolume() {
  var novapage = "/volume.html";

  window.location.href = novapage;
}
