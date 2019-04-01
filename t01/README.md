# JavaScript perusteita ja DOM

JavaScript-ohjelma voi HTML-DOM-olioiden (_Document Object Model_) kautta muuttaa
muuttaa sivun HTML-sisältöä ja CSS-tyylejä. Ensin on kuitenkin haettava olio,
jota haluat muuttaa. Koko dokumenttia kuvaava DOM-olio on document, dokumentin
kaikki sisältö kuuluu siihen puurakenteena (_DOM tree_).

JavaScript-ohjelma voi reagoida HTML-eventteihin (esim. `onclick`, `onmouseover`),
jos siinä asetetaan elementin eventille käsittelijä. Tyypillisesti
käsittelijäksi määritellään JavaScript-funktio.

Jos JavaScript-ohjelmassa selaimessa tapahtuu virhe, sitä on usein mahdoton
nähdä päältä. Virhetulostukset tulevat vain selaimen konsoliin, joten
JavaScript-koodarin pitääkin jatkuvasti pitää konsoli-ikkuna näkyvissä.
Lisämällä konsolitulostuksia ohjelmaasi voit helposti ja nopeasti tehdä omassa
koodissasi tapahtuvia asioita näkyviksi.

## Ohjelmointitehtävä

Tehtävän pohjassa `laskuri.html` on elementti, jonka `id` on laskuri. Muokkaa pohjan
JavaScript –ohjelmaa niin, että se kasvattaa laskurin arvoa jokaisella numeron
klikkauksella.

Lisää ohjelmaan toiminnallisuus, jolla laskurin tausta on parillisilla arvoilla sininen ja parittomilla punainen.

Laskurisivun saa tyylitellä aivan vapaasti niin hienoksi kuin osaa!

## Kysymyksiä

1.  Tee ohjeet, miten selaimen konsolin löytää eri selaimissa (IE, Firefox,
    Chrome). Miten konsoliin tulostetaan JavaScriptissa?

2.  Miten JavaScript-ohjelma voidaan sisällyttää html-sivuun? Mainitse kolme
    erilaista tapaa.

3.  Miksi JavaScript-koodi sijoitetaan yleensä erilliseen tiedostoon?

4.  Html-dokumentissa on seuraavanlainen elementti:  
    ```html
    <div id="aktiivinen">Klikkaa mua!</div>
    ```  
    Anna JavaScript lauseet, joilla  
    a) haet elementtiä vastaavan dom olion  
    b) asetat elementin `click`-käsittelijäksi funktion nimeltä klikkaus  
    c) muutat elementin html-sisällöksi ```'Klikattu'```  
    d) muutat tekstin värin harmaaksi

5.  Mitä muita html-eventtejä kuin ```click``` JavaScript-ohjelmassa voisi
    käsitellä? Nimeä ja selitä lyhyesti viisi mielestäsi käyttökelpoisinta.

6.  CSS-ominaisuuksia voi muuttaa JavaScriptissä, mutta niiden nimet eivät ole
    ihan samat kuin CSS-syntaksissa. Muunnokseen on yksinkertaiset säännöt,
    selvitä ne ja anna esimerkit muunnoksista.

## Bonustehtäviä

Haasta itsesi bonustehtävillä päästäksesi nextille levelille! Se voi näkyä lisääntyneenä oppimisena.

1.  Nollausnappula: Lisää sivulle nollausta varten nappulaelementti, määrittele
    funktio, joka nollaa laskurin, aseta funktio uuden elementin
    `click`-käsittelijäksi. Voit ottaa mallia ohjelmapohjasta.

2.  Painalluksen visualisointi: Kun hiiren painike on pohjassa laskuria
    klikattaessa, muuta laskurin tyylejä oheisen mallin mukaisesti. Vinkki:
    esimerkissä on lisätty harmaa reunus (border) ja läpinäkymättömyyttä
    (opacity) on vähennetty.

<img src="media/b30f9c36069516c2633d259f3e5efee5.png" width="200px"/>
<img src="media/288b4e6b10bad439c0e467e77a0f210c.png" width="210px"/>

## Palautus

-   Dokumentti, jossa ryhmän nimi, ryhmän jäsenten nimet, vastaukset kaikkiin
    kysymyksiin

-   Linkki esittelysivustolle, jolla linkki toimivaan ohjelmaan (omalla
    O-levyllä)

Arvioi vastauksesi tekstikentässä omaa panostasi lopputuloksen
saavuttamisessa ja oppimistasi. Jos jokin tuntui hankalalta, mainitse siitäkin.

>   Vaikka tulokset on tehty tiimityönä, jokainen lähettää
>   erillisen vastauksen ja asentaa ohjelmat omaan serverihakemistoonsa! 

## Vinkkejä

-   Kurssin hakemistossa on pohja sprintin ohjelmointitehtävään. Pohjan koodin
    kommentit antavat osviittaa ratkaisun laatimiseen, lue pohja ajatuksella!

-   W3Schools JavaScript Tutorial on hyvä lähde:
    <http://www.w3schools.com/js/default.asp>. Jos muutamaan ensimmäiseen
    kappaleeseen tutustuu ja kokeilee esimerkkejä, perusasiat selviävät
    nopeasti. Sisällysluettelosta voi etsiä tarvitsemaansa tietoa.

-   JavaScript DOMiin voi tutustua saman tutoriaalin tässä osassa:
    <http://www.w3schools.com/js/js_htmldom.asp>.

-   Tästäkin voi olla apua:
    <http://www.dummies.com/web-design-development/javascript/converting-css-property-names-to-javascript/>

