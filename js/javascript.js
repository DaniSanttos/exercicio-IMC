function clicar() {
    var peso = document.querySelector(".peso").value;
    var m = document.querySelector(".m").value;
    var cm = document.querySelector(".cm").value;
    var alt = m + "." + cm;
    var res = parseFloat(peso) / (parseFloat(alt) * parseFloat(alt));
    var imc = parseFloat(res.toFixed(2))
    document.querySelector(".resultado").innerHTML = imc;
}