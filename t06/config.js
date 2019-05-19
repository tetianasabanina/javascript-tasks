function saadaAsetukset() {
    preventSubmit();
    var otsikko = document.getElementById("otsikko").value;
    var pvm = new Date(document.getElementById('pvm').value);
    var aika = document.getElementById('aika').value;
    var aikaSec = convertToMillisec(aika);
    console.log(pvm);
    console.log(aikaSec);
    pvm = Date.parse(pvm) + aikaSec;
    pvm = new Date(pvm);
    console.log(pvm);
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

function convertToMillisec(ts) {
    var aika = ts.split(':');
    var seconds = (+aika[0] * 3600 + aika[1] * 60);
    return seconds;
}