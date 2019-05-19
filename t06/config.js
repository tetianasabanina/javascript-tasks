function saadaAsetukset() {
    preventSubmit();
    var otsikko = document.getElementById("otsikko").value;
    console.log("otsikko "+otsikko);
    //localStorage.setItem('formOtsikko', otsikko);
    var pvm = new Date(document.getElementById('pvm').value);
    console.log("pvm"+pvm);
    pvm = pvm + document.getElementById('aika').value;
    console.log("+ " + pvm);
    //localStorage.setItem('formPvm', pvm);
    var viesti = document.getElementById('viesti').value;
    console.log(viesti);
    //localStorage.setItem('formViesti', viesti);
    var olio = muodostaOlio(otsikko, pvm, viesti);
    var jsonOlio = JSON.stringify(olio);
    localStorage.setItem('asetukset', jsonOlio);
}

// lomaketta ei lähetetä
function preventSubmit() {
document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
  });
}

function muodostaOlio(formOtsikko, formPvm, formViesti) {
   var asetukset = {
       otsikko: formOtsikko,
       pvm: formPvm,
       viesti: formViesti 
   };
   console.log(asetukset);
   return asetukset;
}

