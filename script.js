var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var resultado = document.querySelector('span')

function somar() {
    resultado.innerHTML = Number(n1.value) + Number(n2.value)
}

function subtrair() {
    resultado.innerHTML = Number(n1.value) - Number(n2.value)
}

function dividir() {
    resultado.innerHTML = Number(n1.value) / Number(n2.value)
}

function multiplicar() {
    resultado.innerHTML = Number(n1.value) * Number(n2.value)
}
