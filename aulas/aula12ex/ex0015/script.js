function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano || fano.value == 0) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'criança-m.png')
            } else if (idade > 10 && idade < 27) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'velho-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'criança-f.png')
            } else if (idade > 10 && idade < 27) {
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'velho-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}