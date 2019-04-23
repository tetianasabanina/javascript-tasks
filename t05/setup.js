function println(item) {
    const content = document.createTextNode(String(item));
    const br = document.createElement('br');
    const elem = document.querySelector('#output');
    elem.appendChild(content);
    elem.appendChild(br);
}

function cls(e) {
    document.querySelector('#output').innerHTML = '';
}

function run(f, ...args) {
    println(`${f.name}(${args})`);
    return f(...args);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const handlers = {
    f1: () => run(parilliset),
    f2: () => run(yhdestaJohonkin, randomInt(2, 16)),
    f3: () => run(jostainJohonkin, randomInt(2, 10), randomInt(11, 20)),
    f4: () => run(tulostaTahtia, randomInt(4, 12)),
    f5: () => run(tulostaNelio, randomInt(3, 7)),
    f6: () => run(tulostaSuorakulmio, randomInt(10, 18), randomInt(2, 7)),
    f7: () => run(tulostaKolmio, randomInt(4, 9)),
    f8: () => { const a = randomInt(50, 150); println(`${run(lukusarjanSumma, a)} (oikea vastaus: ${a * (1 + a)/2})`) },
    f9: () => { const a = randomInt(5, 13); println(`${run(kertoma, a)} (oikea vastaus: ${_(a)})`)},
    f10: () => run(ajaKaikki),
    f11: () => { const a = randomInt(150, 250); println(`${run(rekursiivinenSumma, a)} (oikea vastaus: ${a * (1 + a)/2})`) },
    f12: () => { const a = randomInt(15, 22); println(`${run(rekursiivinenKertoma, a)} (oikea vastaus: ${_(a)})`)}
}

for (const key in handlers) {
    const elem = document.createElement('div');
    elem.id = key;
    elem.textContent = key.toUpperCase();
    elem.classList.add('fn');
    elem.addEventListener('click', cls);
    elem.addEventListener('click', handlers[key]);
    document.getElementById('controls').appendChild(elem);
}

const _= __ => __ >= 1 ? __*_(--__): 1;