it("Si hacemos recortar(4, ['elefante', 'dinosaurio'. 'chocolate', 'avion', 'america']) debería retornar ['elef', 'dino', 'choco', 'avio', 'amer']", function() {
let resultado = recortar(4, ['elefante', 'dinosaurio'. 'chocolate', 'avion', 'america'])
assert.equal(resultado, ['elef', 'dino', 'choco', 'avio', 'amer'],`recortar(4, ['elefante', 'dinosaurio'. 'chocolate', 'avion', 'america']) debería retornar ['elef', 'dino' 'choco', 'avio', 'amer'] pero fue ${resultado}`);
})

it("Si hacemos recortar(1, ['algoritmo', 'bug', 'compilador']) debería retornar ['a', 'b','c']", function() {
let resultado = recortar(1, ['algoritmo', 'bug', 'compilador'])
assert.equal(resultado, ['a', 'b', 'c'],`recortar(1, ['algoritmo', 'bug', 'compilador']) debería retornar ['a', 'b', 'c'] pero fue ${resultado}`);
})