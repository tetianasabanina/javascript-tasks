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

function run(f) {
    println(f.name);
    return f;
}

const handlers = {
    f1: () => run(parilliset)(),
    f2: () => run(yhdestaJohonkin)(12),
    f3: () => run(jostainJohonkin)(5, 17),
    f4: () => run(tulostaTahtia)(9),
    f5: () => run(tulostaNelio)(6),
    f6: () => run(tulostaSuorakulmio)(8, 4),
    f7: () => run(tulostaKolmio)(7),
    f8: () => println(run(lukusarjanSumma)(100)),
    f9: () => println(run(kertoma)(10)),
    f10: () => run(ajaKaikki)(),
    f11: () => run(println)(rekursiivinenSumma(200)),
    f12: () => run(println)(rekursiivinenKertoma(12))
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
