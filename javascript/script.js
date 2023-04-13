var form = window.document.getElementById('form-deposito');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    }
)

console.log(form);

function calcular() {

var alfa = window.document.getElementById('txta');
var beta = window.document.getElementById('txtb');
var res = window.document.getElementById('res');
var alfa = Number(txta.value);
var beta = Number(txtb.value);
if (beta > alfa) {
        res.style.backgroundColor = 'lightgreen'
        res.innerHTML = `Parabéns você avançou no teste!`
} else {
    res.style.backgroundColor = '#ff4d4d'
    res.innerHTML = `Sinto muito! Você precisa refazer esse teste.`
}
if (beta === alfa) {
    res.style.backgroundColor = 'aliceblue'
    res.innerHTML = `Favor refazer o teste.`
}

}
