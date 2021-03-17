it("Si hacemos estanJuntos(['Sam', 'Frodo', 'Legolas'])  debería retornar true ", function() {
let resultado = estanJuntos(['Sam', 'Frodo', 'Legolas']')
assert.equal(resultado,true ,`estanJuntos(['Sam', 'Frodo', 'Legolas'])  debería retornar true pero fue ${resultado}`);
})

it("Si hacemos estanJuntos(['Aragorn', 'Frodo', 'Frodo'])  debería retornar true ", function() {
let resultado = estanJuntos(['Aragorn', 'Frodo', 'Frodo']')
assert.equal(resultado,true ,`estanJuntos(['Aragorn', 'Frodo', 'Frodo'])  debería retornar true pero fue ${resultado}`);
})

it("Si hacemos estanJuntos(['Sam', 'Orco', 'Frodo'])  debería retornar false ", function() {
let resultado = estanJuntos(['Sam', 'Orco', 'Frodo']')
assert.equal(resultado,false ,`estanJuntos(['Sam', 'Orco', 'Frodo'])  debería retornar false pero fue ${resultado}`);
})