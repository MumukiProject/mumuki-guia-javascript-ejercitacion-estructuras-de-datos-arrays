/*it("Si hacemos separar(['🐶','🐱','🐶','🐱','🐱','🐶','🐶']) debería retornar ['🐶','🐶','🐶','🐶','🐱','🐱','🐱']", function() {
let resultado = separar([🐶,🐱,🐶,🐱,🐱,🐶,🐶])
assert.equal(resultado, [🐶,🐶,🐶,🐶,🐱,🐱,🐱],`separar debería retornar ['🐶','🐶','🐶','🐶','🐱','🐱','🐱'] pero fue ${resultado}`);
})
*/
it("Si hacemos separar([]) debería retornar []", function() {
let resultado = separar([1,2,1,2,2,1])
assert.equal(resultado, [1,1,1,2,2,2],`separar debería retornar ['🐶','🐶','🐶','🐶','🐱','🐱','🐱'] pero fue ${resultado}`);
})
