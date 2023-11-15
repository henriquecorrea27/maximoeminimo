function calcularVolume() {
  var areaInput = document.getElementById("area");
  var area = parseFloat(areaInput.value);

  var lado = Math.sqrt(area);

  var x = lado / 6;

  var volume = (lado - 2 * x) * (lado - 2 * x) * x;

  document.getElementById("resultado").textContent =
    "O volume max é: " + volume;
}

function calcularJardim() {
  var cateto1Input = document.getElementById("cateto1");
  var cateto1 = parseFloat(cateto1Input.value);

  var cateto2Input = document.getElementById("cateto2");
  var cateto2 = parseFloat(cateto2Input.value);

  if (cateto1 < cateto2) {
    var x = cateto1 / ((2 * (cateto1 / 2)) / (cateto2 / 2));
  } else {
    var x = cateto2 / ((2 * (cateto2 / 2)) / (cateto1 / 2));
  }

  if (cateto1 < cateto2) {
    var resultado = cateto1 * x - (cateto1 / 2 / (cateto2 / 2)) * x ** 2;
  } else {
    var resultado = cateto2 * x - (cateto2 / 2 / (cateto1 / 2)) * x ** 2;
  }

  document.getElementById("resultado").textContent =
    "A maior área para o jardim é: " + resultado;
}

function calcularCercado() {
  var cercadoInput = document.getElementById("cercado");
  var cercado = parseFloat(cercadoInput.value);

  var x = cercado / 4;
  var y = cercado - 2 * x;

  var areaMax = x * y;

  document.getElementById("resultado").textContent =
    "A maior área possivel com " + cercado + "m de arame é: " + areaMax + "m²";
}

function redirecionarVolume() {
  var pagevolume = "/volume.html";

  window.location.href = pagevolume;
}

function redirecionarJardim() {
  var pagejardim = "/jardim.html";

  window.location.href = pagejardim;
}

function redirecionarCercado() {
  var pageCercado = "/cercado.html";

  window.location.href = pageCercado;
}

function voltar() {
  var voltar = "/index.html";

  window.location.href = voltar;
}
