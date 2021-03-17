it("Si hacemos obtenerChatStatus(['Ada'])  debería retornar 'Ada está conectada' ", function() {
let resultado = obtenerChatStatus(['Ada'])
assert.equal(resultado,'Ada está conectada' ,`obtenerChatStatus(['Ada'])  debería retornar 'Ada está conectada' pero fue ${resultado}`);
})

it("Si hacemos obtenerChatStatus(['Ada', 'Grace'])  debería retornar 'Ada y Grace estan conectadas' ", function() {
let resultado = obtenerChatStatus(['Ada', 'Grace'])
assert.equal(resultado,'Ada y Grace están conectadas' ,`obtenerChatStatus(['Ada', 'Grace'])  debería retornar 'Ada y Grace están conectadas' pero fue ${resultado}`);
})

it("Si hacemos obtenerChatStatus(['Ada', 'Grace', 'Marie'])  debería retornar 'Ada, Grace y 1 persona(s) más están conectadas' ", function() {
let resultado = obtenerChatStatus(['Ada', 'Grace', 'Marie'])
assert.equal(resultado,'Ada, Grace y 1 persona(s) más están conectadas' ,`obtenerChatStatus(['Ada', 'Grace', 'Marie'])  debería retornar 'Ada, Grace y 1 persona(s) más están conectadas' pero fue ${resultado}`);
})
