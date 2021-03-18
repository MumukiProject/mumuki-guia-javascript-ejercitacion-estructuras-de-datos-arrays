it("Si hacemos jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) debería retornar Grace", function() {
let resultado = jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra'])
assert.equal(resultado, 'Grace',`jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) debería retornar 'Grace' pero fue ${resultado}`);
})

it("Si hacemos jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']) debería retornar Empate", function() {
let resultado = jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel'])
assert.equal(resultado, 'Empate',`'jugarPiedraPapelTijeras(Ada', 'Grace', ['papel'], ['papel']) debería retornar 'Empate' pero fue ${resultado}`);
})

it("Si hacemos jugarPiedraPapelTijeras('Ada','Grace',
  ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel']) debería retornar Ada", function() {
let resultado = jugarPiedraPapelTijeras('Ada','Grace',
  ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel'])
assert.equal(resultado, 'Ada',`jugarPiedraPapelTijeras('Ada','Grace',
  ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel']) debería retornar 'Ada' pero fue ${resultado}`);
})
