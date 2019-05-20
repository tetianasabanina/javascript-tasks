'use strict'

// arvotaan arvattava numero väliltä 0-100, 0 ja sata myös mahdollisia
var arvattava = Math.floor(Math.random() * (100 + 1) );

// debug-tulostus kehittäjälle, kommentoi pois tuotantoversiosta
console.log("Arvattava: " + arvattava);

// muuttuja pelaajan nykyistä arvausta varten
// alkuarvo on undefined, jotta erotetaan, onko tehty yhtään arvausta
// vai ei
var arvaus = undefined;

// määrittele myös muuttujat pelaajan nykyistä arvausta, parasta
// alinta ja parasta ylintä arvausta varten sekä tehtyjen arvausten
// lukumäärää varten

var count = 0;
var bestmax = 100;
var bestmin = 0;


// kannattaa myös hakea tarvitsemasi DOM-elementit muuttujiin,
// jotta niitä on helpompi käyttää, muuttujanimet ovat lyhyempiä
// kirjoittaa kuin "document.getElementById(...)..."
var vihjeElem = document.getElementById('vihje');
var alempiElem = document.getElementById('alempi');
var ylempiElem = document.getElementById('ylempi');
var numero = document.getElementById('numerot');
var lastNum = document.getElementById('last-num');
var upperBar = document.getElementById('upper-bar');
var lowerBar = document.getElementById('lower-bar');
var middleBar = document.getElementById('middle-bar');

//
// Event-käsittelijä lomakkeelle
//
function arvausTehty() {
  // haetaan käyttäjän syöttämä arvo ja tulkitaan se numeroksi
  var syote = document.getElementById('luku').value;
  arvaus = parseInt(syote);
  console.log("Arvaus: " + arvaus);

  // tyhjennetään lomake uutta arvausta varten
  document.getElementById('lomake').reset();

  count = count + 1;
  console.log("arvauksia tehty:", count);

  /*
  Toteuta tähän algoritmi:

    Päivitä arvausten määrä
    Jos pelaajan arvaus on pienempi kuin arvattava,
        Jos arvaus on parempi kuin nykyinen alempi arvaus,
          päivitä alempi arvaus
        Anna vihje "Luku on suurempi"
    Jos pelaajan arvaus on suurempi kuin arvattava,
        Jos arvaus on parempi kuin nykyinen ylempi arvaus,
          päivitä ylempi arvaus
        Anna vihje "Luku on pienempi"
    Jos arvaus on yhtäsuuri kuin arvattava
        Kirjoita vihje-elementtiin onnitttelut ja arvausten määrä
        Kirjoita numerot-elementtiin luvut nollasta arvattavaan
          Huomaa, että numerot on kirjoitettava html-koodina, jotta
          ne näytetään oikein! 
  */
if (arvaus < arvattava) {
    console.log("<");
    vihjeElem.innerHTML = "Luku on suurempi";
    if (arvaus > bestmin) {
      bestmin = arvaus;
      console.log("best min", bestmin);
      alempiElem.innerHTML = "Paras arvaus alapuolella " + bestmin;
      lowerBar.style.width = bestmin + "%";
      middleBar.style.width = 100 - bestmin - ( 100 - bestmax ) + "%";
      document.getElementById('lower-value').innerHTML = bestmin;     
    }
}

else if (arvaus > arvattava) {
  vihjeElem.innerHTML = "Luku on pienempi";
    if (arvaus < bestmax) {
      bestmax = arvaus;
      console.log("best max ", bestmax);
      ylempiElem.innerHTML = "Paras arvaus ylapuolella " + bestmax;
      upperBar.style.width = 100 - bestmax + "%";
      middleBar.style.width = 100 - bestmin - ( 100 - bestmax) + "%";
      document.getElementById('upper-value').innerHTML = bestmax;   
    }
}
else if (arvaus === arvattava) {
  vihjeElem.innerHTML = "Onnittelut, arvasit oikein! " + "Arvauksia: " + count;
  vihjeElem.style.color = "red";
  console.log("oikein ", arvaus, arvattava);
  var text = "";
  var i = 0;
  while (i < arvattava) {
    text += i + "  ";
    i++; 
    numero.innerHTML = text;
      } 
    console.log(i);
    text =" " + i + " ";
    lastNum.innerHTML = text;
    lastNum.style.color = "white";
    lastNum.style.backgroundColor = "green";

}

  // onsubmit-käsittelijä palauttaa false, jotta lomaketta ei oikeasti lähetettäisi
  // lähetys lataisi sivun uudelleen ja nollaisi koko pelin
  return false;
  
}


// asetetaan tapahtumankäsittelijä lomakkeelle, siis määritellään,
// mitä funktiota kutsutaan, kun lomake lähetetään
document.getElementById('lomake').onsubmit = arvausTehty;
