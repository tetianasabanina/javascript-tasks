println("Hello, World!");

//F1 tulostaa parilliset kokonaisluvut väliltä 2–50
function parilliset() {
    let i = 2;
    while (i <= 50) {
        println(i);
        i = i + 2;
    }
}

//F2 tulostaa kokonaisluvut 1:stä parametrina annettuun lukuun asti
function yhdestaJohonkin(luku) {
    let i = 1;
    while (i <= luku) {
        println(i);
        i++;
    }
}
//yhdestaJohonkin(12);

//F3 tulostaa kokonaisluvut parametrina annetusta luvusta toiseen parametrina annettuun lukuun asti.
function jostainJohonkin(mista, mihin) {
    while (mista <= mihin) {
        println(mista++);
    }
}
//jostainJohonkin(8, 15);

//F4 tulostaa annetun määrän tähtiä ja rivinvaihdon

function tulostaTahtia(montako) {
    /*let rivi = '';
    let i = 0;
    while (i < montako) {
        rivi = rivi + '* ';
        i++;
    } */
    println('* '.repeat(montako));
}

//F5 tulostaa neliön käyttäen tulostaTahtia-funktiota
function tulostaNelio(sivunpituus) {
    for (let i = 0; i < sivunpituus; i++) {
    tulostaTahtia(sivunpituus);
    }
}

//F6 tulostaa suorakulmion käyttäen tulostaTahtia-funktiota
function tulostaSuorakulmio(leveys, korkeus) {
    for (let i = 1; i <= korkeus; i++) {
        tulostaTahtia(leveys);
    }
}

//F7  tulostaa kolmion käyttäen tulostaTahtia-funktiota
function tulostaKolmio(koko) {
    for (let i = 0; i < koko; i++) {
        tulostaTahtia(i+1);
    }
}

//F8 palauttaa summan 1+2+3+...+n, missä n on parametrina annettu luku
function lukusarjanSumma(n) {
    let summa = 0;
    for (i = 1; i <= n; i++) {
        summa += i;
    }
    return (summa);
}

//F9 palauttaa luvun n kertoman. Kertoma n! lasketaan kaavalla 1*2*3*...*n
function kertoma(n) {
    let kert = 1;
    for (i = 1; i <= n; i++) {
        kert *= i;
    }
    return (kert);
}

/*F10 ajaa kaikki harjoituksen funktiot ja lisää väliin otsikkotulostuksia, joista
selviää, mikä tehtävä kulloinkin on kyseessä */
function ajaKaikki() {
    otsikko("parilliset");
    parilliset();
    otsikko("yhdestaJohonkin");
    yhdestaJohonkin(randomInt(2, 16));
    otsikko("jostainJohonkin");
    jostainJohonkin(randomInt(2, 10), randomInt(11, 20));
    otsikko("tulostaTahtia");
    tulostaTahtia(randomInt(4, 12));
    otsikko("tulostaNelio");
    tulostaNelio(randomInt(3, 7));
    otsikko("tulostaSuorakulmio");
    tulostaSuorakulmio(randomInt(10, 18), randomInt(2, 7));
    otsikko("tulostaKolmio");
    tulostaKolmio(randomInt(4, 9));
    otsikko("lukusarjanSumma");
    println(lukusarjanSumma(randomInt(50, 100)));
    otsikko("kertoma");
    println(kertoma(randomInt(2, 20)));
}
function otsikko(teksti) {
    println(teksti);
    println('-'.repeat(teksti.length));
}
//F11 laskee ja palauttaa lukusarjan summan rekursiivisella algoritmilla.
function rekursiivinenSumma(n) {
    if (n < 0) {
        return ('negative number!');
    } else if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return (n + rekursiivinenSumma(n - 1));
    }
}

//F12 laskee ja palauttaa kertoman rekursiivisella algoritmilla.
function rekursiivinenKertoma(n) {
    if (n == 0) {
        return 1;
    } else {
        return (n * rekursiivinenKertoma(n - 1));
    }
}
