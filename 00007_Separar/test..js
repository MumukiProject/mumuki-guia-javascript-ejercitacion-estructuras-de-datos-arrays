it("Si hacemos separar(['🐶🐱🐶🐱🐱🐶🐶']) debería retornar '🐶🐶🐶🐶🐱🐱🐱'", function() {
let resultado = separar(['🐶,'🐱','🐶','🐱','🐱','🐶','🐶'])
assert.equal(resultado, 58,`separar(['🐶🐱🐶🐱🐱🐶🐶']) debería retornar '🐶🐶🐶🐶🐱🐱🐱' pero fue ${resultado}`);
})

