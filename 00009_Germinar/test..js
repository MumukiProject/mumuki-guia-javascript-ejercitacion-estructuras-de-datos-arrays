it("Si hacemos germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') debería retornar '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'", function() {
let resultado = germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')
assert.equal(resultado, '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸',`germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') debería retornar '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸' pero fue ${resultado}`);
})