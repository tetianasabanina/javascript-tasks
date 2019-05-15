"use strict";

function ex12 () {
    var jasenet = {
    nimi: { etunimi: 'Raija', sukunimi: 'Nurminen'},
    ika: 38,
    sukupuoli: "nainen",
    harrastukset: ['ratsastus', 'tanssi', 'shoppailu'],
    jasen: true
}
console.log(jasenet);
var json = JSON.stringify(jasenet);
document.getElementById("olio").innerHTML = json;
}

function ex3() {
var olio = {};
console.log("tyhjä olio: " + olio);
olio.etunimi = "Magnus";
console.log(olio);
olio.sukunimi = "von Wright";
console.log(olio);
olio.etunimi = "Ferdinand"
console.log(olio);
delete olio.etunimi;
console.log(olio);
}

function ex4() {
var olio2 = document.getElementById('send').addEventListener('click', handleClick);
console.log(olio2);
}
function handleClick() {
    const inputKentta = document.getElementById('json');
    console.log(inputKentta.value);
    let syote = inputKentta.value;
    inputKentta.value = '';
    if (syote === '') {
        syote = 'Anna JSON olio';
    }
    document.getElementById('form').classList.add('muuttunut');
    setTimeout(poista, 3000);
    return inputKentta;
}

function poista() {
    document.getElementById('form').classList.remove('muuttunut');
}
ex12();
ex3();
ex4();