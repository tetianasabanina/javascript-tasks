function saadaAsetukset() {
    preventSubmit();
    var otsikko = document.getElementById("otsikko").value;
    var pvm = new Date(document.getElementById('pvm').value);
    pvm = pvm + document.getElementById('aika').value;
    var viesti = document.getElementById('viesti').value;
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

