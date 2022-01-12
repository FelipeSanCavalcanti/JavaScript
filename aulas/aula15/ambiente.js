let num = [5, 4, 3, 6, 1]
num.push(7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} números`)
console.log(`O primeiro elemento é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não se encontra em nenhuma posição')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}