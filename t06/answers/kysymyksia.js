"use strict";
// määritää olio ja tulosta konsoolin 

function setOlio () {
    var jasenet = {
        nimi: { etunimi: 'Raija', sukunimi: 'Nurminen'},
        ika: 38,
        sukupuoli: "nainen",
        harrastukset: ['ratsastus', 'tanssi', 'shoppailu'],
        jasen: true
        }
    console.log(jasenet);

    var json = JSON.stringify(jasenet); //olio => JSON merkkijonoon
    document.getElementById("olio").innerHTML = json;
}

function toiminnotOliossa() {
    var olio = {}; //lou tyhja olio
    console.log("tyhjä olio: " + olio);  
    olio.etunimi = "Magnus"; //lisää oliolle ominaisuus etunimi ja anna sille arvo 
    console.log(olio);
    olio.sukunimi = "von Wright"; //lisää oliolle ominaisuus sukunimi ja anna sille arvo
    console.log(olio);
    olio.etunimi = "Ferdinand" //Muutaa ominaisuuden etunimi 
    console.log(olio);
    delete olio.etunimi;// Poista ominaisuus etunimi oliosta.
    console.log(olio);
}

function jsonOlioksi() {
    document.getElementById('send').addEventListener('click', klikkaus);
}

function klikkaus() {
    const syote = document.getElementById('json').value;
    let message;
    
    if (!IsValidJSONString(syote)) {
        message = 'virheellinen JSON-muoto';
    } else {
        message = 'JSON-merkkijono muodostetaan... ';
    }

    document.getElementById('message').innerHTML = message;
    document.getElementById('form').classList.add('muuttunut');
    setTimeout(poista, 3000);
    muodostaOlio(syote);
}

function poista() {
    document.getElementById('form').classList.remove('muuttunut');
    document.getElementById('message').innerHTML = "";
}

function muodostaOlio(jsonToOlio) {
    let olioFromJson = JSON.parse(jsonToOlio);
    console.log("javascript-olio json merkkijonosta= ");
    console.dir(olioFromJson); /*logs an object to the console, with the object's fields 
                                expandable using disclosure widgets */
}

function IsValidJSONString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

setOlio();              //kysymyksia 1,2
toiminnotOliossa();     //kysymys 3
jsonOlioksi();          //kysymys 4