console.log("Olá Mundo!");
const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = bool1 && bool2;
console.log("bool1 && bool2", resultado);

const resultado = bool1 && bool2 && bool3;
console.log("bool1 && bool2 && bool3", resultado);

const resultado = !resultado && (bool1 || bool2);
console.log("bool1 || bool2", resultado);

console.log("bool1, bool2, bool3", typeof resultado);



