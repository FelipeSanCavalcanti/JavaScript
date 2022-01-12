let num = document.getElementById('txtn')
let tab = document.getElementById('txtv')
let resp = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inTab(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inTab(num.value, valores)) {
        valores.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `Valor ${num.value} adicionado`
        tab.appendChild(opt)
        resp.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já adicionado na lista')
        
    }
    num.value = ''
    num.focus() 
}

function finalizar() {
    if (valores.length == 0){
        window.alert(`Adicione valores antes de finalizar`)
    } else {
        let tot = valores.length
        let max = valores[0]
        let min = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            media = soma / tot
            if (valores[pos] > max) {
                max = valores[pos]
            }
            if (valores[pos] < min){
                min = valores[pos]
            }
        }

        resp.innerHTML = ''
        resp.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        resp.innerHTML += `<p>O maior valor informado foi ${max}</p>`
        resp.innerHTML += `<p>O menor valor informado foi ${min}</p>`
        resp.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        resp.innerHTML += `A média dos valores digitados é ${media}`
    }
}