function sum(...num) {
    return num.reduce((n1, n2) =>{
        return n1 + n2;
    })
}

console.log(sum(1, 2, 3, 4, 5));