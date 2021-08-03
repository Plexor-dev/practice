let cantidad = prompt("cuantas decisiones?")
cantidad = parseInt(cantidad)

let list = []


for(let i = 0; i<cantidad; i++){
    let d = prompt("Que opcion vas a agregar?");
    list.push(d);
}


console.log(`Cantidad de opciones ${cantidad}.`)

const random = n => Math.floor(Math.random()*n.length)

let ran = random(list);
let result = list[ran];

console.log(`el resultado es ${result}`)
alert(`el resultado es ${result}`)
