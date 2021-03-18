it("Si hacemos comer('🐰🥕🥬🥕🚫') debería retornar '' ", function() {
let resultado = comer('🐰🥕🥬🥕🚫')
assert.equal(resultado, '',`comer('🐰🥕🥬🥕🚫') debería retornar '' pero fue ${resultado}`);
})