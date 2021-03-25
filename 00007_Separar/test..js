it("Si hacemos separar(['🐶','🐱','🐶','🐱','🐱','🐶','🐶']) debería retornar ['🐶','🐶','🐶','🐶','🐱','🐱','🐱']", function() {
let resultado = separar([🐶,🐱,🐶,🐱,🐱,🐶,🐶])
assert.equal(resultado, [🐶,🐶,🐶,🐶,🐱,🐱,🐱],`separar debería retornar ['🐶','🐶','🐶','🐶','🐱','🐱','🐱'] pero fue ${resultado}`);
})

