let num = [2, 5, 4, 3, 6, 1]
/*
for (let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} temos ${num[pos]}`)
}
*/

for (let pos in num) {
    console.log(`A posição ${pos} temos ${num[pos]}`)
}