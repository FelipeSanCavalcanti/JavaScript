function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let r = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        r.innerHTML = 'algum campo está vazio'
    } else {
        r.innerHTML = 'Contagem: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('O passo não pode ser  igual a zero considerando passo 1')
            p = 1
        }
        if (i < f) {
            ///Contagem crescente
            for(c = i; c <= f; c += p) {
                r.innerHTML += `${c} \u{1F449} `    
            }
        } else {
            ///Contagem decrecente
            for(c = i; c >= f; c-=p) {
                r.innerHTML += `${c} \u{1F449}`
            }
        }
        r.innerHTML += `\u{1F3C1}`
    }
}