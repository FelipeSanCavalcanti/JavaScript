function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = ` Agora são ${hora} horas! `
    if (hora >= 0 && hora < 12){
        document.body.style.background = '#6bb5c8'
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background ='#b0846f'
        img.src = 'fototarde.png'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }

}