var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora}h`)
if (hora < 12) {
    console.log('Bom Dia!')
}else if (hora < 18) {
    console.log('Boa Tarde!')
}else if (hora > 12) {
    console.log('Boa Noite!')
}
