# Toistorakenteet ja funktiot

Toistorakenteet ovat yksi ohjelmoinnin perusrakenteista: jotain iteroidaan (tehdään monta kertaa) sen perusteella, onko jokin ehto tosi. Toistaminen lopetetaan, kun toistoehto ei enää ole tosi.

Funktiot ovat ehkä tärkein ohjelmoinnin työkalu, niitä käytetään kaikissa ohjelmissa jatkuvasti. Funktioilla voi olla parametrimuuttujia, jotka saavat arvonsa, kun funktiota kutsutaan. Usein funktiot palauttavat lopputuloksena jonkin arvon (paluuarvo). Lausekkeessa funktiokutsu korvautuu paluuarvollaan.

Tässä tehtävässä harjoitellaan molempia ohjelmoinnin kulmakiviä.

## Tehtävät
Tehtävänäsi on toteuttaa joukko JavaScript-funktioita web-sivulle. Sivun HTML on jo valmiina, ja sivu sisältää jo toiminnot, jotka käyttävät funktioitasi. 

Valmiina on myös funktio `println(item)`, jolla voi tulostaa yhden rivin sivulle, siis parametrin `item` arvon ja rivinvaihdon.

1.  Tee funktio `parilliset`, joka tulostaa parilliset kokonaisluvut väliltä 2–50.

2.  Tee funktio `yhdestaJohonkin`, joka tulostaa kokonaisluvut 1:stä parametrina annettuun lukuun
    asti _(esimerkissä: 12)_.

3.  Tee funktio `jostainJohonkin`, joka tulostaa kokonaisluvut parametrina annetusta luvusta
    toiseen parametrina annettuun lukuun asti _(esimerkissä: 5, 17)_.

4.  Tee funktio `tulostaTahtia(montako)`, joka tulostaa annetun määrän tähtiä ja
    rivinvaihdon. Esimerkiksi kutsu `tulostaTahtia(9)` tulostaa:  
    ```console
    *********
    ```

5.  Tee funktio `tulostaNelio(sivunpituus)` joka tulostaa neliön käyttäen
    `tulostaTahtia`-funktiota. Siis esimerkiksi kutsu `tulostaNelio(4)` tulostaa
    seuraavaa:  
    ```console
    ****  
    ****  
    ****  
    ****
    ```

6.  Tee funktio `tulostaSuorakulmio(leveys, korkeus)` joka tulostaa suorakulmion käyttäen `tulostaTahtia`-funktiota. 
    Siis esimerkiksi kutsu `tulostaSuorakulmio(17,3)` tulostaa seuraavaa:  
    ```console
    *****************
    *****************
    *****************  
    ```

7.  Tee funktio `tulostaKolmio(koko)` joka tulostaa kolmion käyttäen `tulostaTahtia-funktiota`. 
    Siis esimerkiksi kutsu tulostaKolmio(5) tulostaa seuraavaa:  
    ```console
    *  
    **  
    ***  
    ****  
    *****
    ```

8.  Tee funktio `lukusarjanSumma(n)`, joka palauttaa summan 1+2+3+...+n, missä `n`
    on parametrina annettu luku. Sivu tulostaa lukujen 1-100 summan _(5050)_.

9.  Tee funktio `kertoma(n)`, joka palauttaa luvun n kertoman. Kertoma n!
    lasketaan kaavalla 1\*2\*3\*...\*n. Esimerkiksi luvun 4 kertoma on 24, eli
    4! = 1\*2\*3\*4 = 24. Lisäksi on määritelty, että luvun 0 kertoma on 1, eli
    0! = 1. Sivu tulostaa luvun 10 kertoman _(3628800)_.

10. Tee myös funktio `ajaKaikki()`, joka ajaa kaikki harjoituksen funktiot ja lisää väliin otsikkotulostuksia, joista
    selviää, mikä tehtävä kulloinkin on kyseessä.

Tee kaikki funktiot tiedostoon `script.js`. 

## Bonus
11.	Toteuta funktio `rekursiivinenSumma(n)`, joka laskee ja palauttaa lukusarjan summan rekursiivisella algoritmilla _(20100)_.
12.	Toteuta funktio `rekursiivinenKertoma(n)`, joka laskee ja palauttaa kertoman rekursiivisella algoritmilla _(479001600)_.


## Palautus

Palauta linkki nettisivuun.

## Ohjeita

Kehityksen aikana kannattaa testata funktioita kutsumalla niitä suoraan, jotta näet, mitä ne tekevät.