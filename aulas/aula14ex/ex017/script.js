function gerar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('txtt')
    
    if (num.value.length == 0) {
        window.alert('Digite um número para ver sua tabuada')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            let opt = document.createElement('option')
            opt.text = `${n} X ${c} = ${n * c}`
            opt.value = `tab ${c}`
            tab.appendChild(opt)
        }
    }
} 