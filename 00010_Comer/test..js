it("Si hacemos comer('π°π₯π₯¬π₯π«')  deberΓ­a retornar '' ", function() {
let resultado = comer('π°π₯π₯¬π₯π«') 
assert.deepEqual(resultado, '',`comer deberΓ­a retornar '' pero fue ${resultado}`);
})

it("Si hacemos comer('π±π₯π±π°π±π₯¬π±π±π«π·') deberΓ­a retornar 'π±π₯π±π·'", function() {
let resultado = comer('π±π₯π±π°π±π₯¬π±π±π«π·')
assert.deepEqual(resultado,  'π±π₯π±π·' ,`comer deberΓ­a retornar 'π±π₯π±π·' pero fue ${resultado}`);
})


