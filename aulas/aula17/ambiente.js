 //Objetos
 
let pessoas = {
    nome: "Felipe",
    idade: 18,
    genero: "Pastilha da Garoto",
    peso: function(kg) {
    return `${kg}kg`
    },
    tdh: ["Feliz", "legal"]
}

console.log("Detectamos uma "+pessoas.genero + " chamada "+pessoas.nome+" de "+pessoas.idade+" anos "+"pesando "+pessoas.peso(100)+" que está muito "+pessoas.tdh[0])