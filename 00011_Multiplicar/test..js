

it("Si hacemos multiplicar(2, [5, 7, 15, 22, 40]) debería retornar [10, 14, 30, 44, 80]", function() {
let resultado = multiplicar(2, [5, 7, 15, 22, 40])
assert.deepEqual([20, 50, 770],resultado ,`multiplicar(2, [5, 7, 15, 22, 40]) debería retornar [10, 14, 30, 44, 80] pero fue ${resultado}`);
})

it("Si hacemos multiplicar(10, [2, 5, 77]) debería retornar [20, 50, 770]", function() {
let resultado = multiplicar(10, [2, 5, 77])
assert.deepEqual([10, 14, 30, 44, 80],resultado ,`multiplicar(10, [2, 5, 77]) debería retornar [20, 50, 770] pero fue ${resultado}`);
})

