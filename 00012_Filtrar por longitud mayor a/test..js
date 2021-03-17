it("Si hacemos filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',]) debería retornar ['remolacha', 'sorpresa', 'verde']", function() {
let resultado = filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',])
assert.equal(resultado, ['remolacha', 'sorpresa', 'verde'],`filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',]) debería retornar ['remolacha', 'sorpresa', 'verde'] pero fue ${resultado}`);
})