function saadaAsetukset() {
    
    var otsikko = document.getElementById("otsikko").value;
    //console.log("otsikko "+otsikko);
    localStorage.setItem('formOtsikko', otsikko);
    var pvm = document.getElementById('pvm').value;
    localStorage.setItem('formPvm', pvm);
    //console.log("pvm"+pvm);
    var aika = document.getElementById('aika').value;
    //console.log(aika);
    localStorage.setItem('formAika', aika);
    var viesti = document.getElementById('viesti').value;
    //console.log(viesti);
    localStorage.setItem('formViesti', viesti);
}
/*
function validateForm() {
    var x = document.getElementById("pvm").value;
    const tänään = new Date();
    if (x == tänään) {
      alert("Aika on ohi!");
      return false;
    }
  }*/

  /*function varastoon() {
      localStorage.setItem('otsikko', 'formOtsikko');
  }*/