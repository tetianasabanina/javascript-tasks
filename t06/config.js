// setting data from the previous session
preAsetukset();

// getting data from configuration page
//document.getElementById('btn').onsubmit = saadaAsetukset();
//document.getElementById('btn').addEventListener("click", saadaAsetukset);
document.getElementById('config-form').addEventListener("click", saadaAsetukset);

function saadaAsetukset() {
    preventSubmit();               // lomaketta ei lähetetä
    var otsikko = document.getElementById("otsikko").value;
    var viesti = document.getElementById('viesti').value;
    var dayOnly = document.getElementById('pvm').value
    var pvm = new Date(dayOnly);
    var timezoneOffset = pvm.getTimezoneOffset() * 60 * 1000;
    var aika = document.getElementById('aika').value;
    var aikaSec = convertToMillisec(aika);
    pvm = Date.parse(pvm) + aikaSec + timezoneOffset;
    pvm = new Date(pvm);
    console.log(pvm);
    var todayIs = new Date();

    if (pvm <= todayIs || pvm == "Invalid Date") {
        alert("Päivämääräsi on vanhentunut tai ei asetettu");
    } else {
        localStorage.setItem('päivä', dayOnly);
        localStorage.setItem('aika', aika);
        var olio = muodostaOlio(otsikko, pvm, viesti);
        var jsonOlio = JSON.stringify(olio);
        localStorage.setItem('asetukset', jsonOlio);
        localStorage.setItem('avain', "taletettu");
        var link = "index.html";
        redirect(link);
    }
}

function preAsetukset() {
    var ensAsetukset = JSON.parse(localStorage.getItem('asetukset'));
    document.getElementById("otsikko").value = ensAsetukset.otsikko;
    document.getElementById("viesti").value = ensAsetukset.viesti;
    document.getElementById("pvm").value = localStorage.getItem('päivä');
    document.getElementById("aika").value = localStorage.getItem('aika')
    
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
    var mseconds = (+aika[0] * 60 * 60 * 1000 + aika[1] * 60 * 1000);
    return mseconds;
}

function redirect(linkki) {
    console.log("hello from redirect");
    window.location.replace(linkki); 
}