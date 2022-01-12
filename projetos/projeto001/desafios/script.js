let name = window.document.getElementById('txtn')

let ImDr = {
    name: 'Imagine Dragons',
    nationality: 'Estados Unidos',
    genre: 'Indie Rock',
    menbers: 4,
    formed: 2008,
    split: false,
    albuns: {
        a1 : {
        name: 'Evolve',
        released: 2017},
    a2 : {
        name: 'Night Visions',
        released: 2012}
    },
}

function ver() {
    resp.innerHTML = ''
    resp.innerHTML += `<p>A banda de ${ImDr.genre}, ${ImDr.name} foi criada nos ${ImDr.nationality} e está na ativa desde ${ImDr.formed}. Seu primeiro album foi lançado em ${ImDr.albuns.a2.released} chamado ${ImDr.albuns.a2.name}. Atualmente conta com no total ${ImDr.menbers} menbros.</p>`
}