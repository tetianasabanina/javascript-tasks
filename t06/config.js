// setting data from the previous session
preAsetukset();

// getting data from configuration page
function saadaAsetukset() {
    preventSubmit();               // lomaketta ei lähetetä
    var otsikko = document.getElementById("otsikko").value;
    var pvm = new Date(document.getElementById('pvm').value);
    var aika = document.getElementById('aika').value;
    var aikaSec = convertToMillisec(aika);
    console.log(pvm);
    console.log(aikaSec);
    pvm = Date.parse(pvm) + aikaSec;
    pvm = new Date(pvm);
    console.log(pvm);
    var todayIs = new Date();
    if (pvm <= todayIs || pvm == "Invalid Date") {
        alert("Päivämääräsi on vanhentunut tai ei asetettu");
    }
    else {var viesti = document.getElementById('viesti').value;
    var olio = muodostaOlio(otsikko, pvm, viesti);
    var jsonOlio = JSON.stringify(olio);
    localStorage.setItem('asetukset', jsonOlio);
    window.location.replace("index.html"); 
    }
}

function preAsetukset() {
    var ensAsetukset = JSON.parse(localStorage.getItem('asetukset'));
    document.getElementById("otsikko").value = ensAsetukset.otsikko;
    document.getElementById("viesti").value = ensAsetukset.viesti;
}

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