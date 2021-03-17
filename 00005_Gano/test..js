it("Si hacemos invertirCaso('Ada Lovelace')  debería retornar 'aDA lOVELACE'", function() {
let resultado = invertirCaso('Ada Lovelace') 
assert.equal(resultado, 'aDA lOVELACE',`invertirCaso('Ada Lovelace')  debería retornar 'aDA lOVELACE' pero fue ${resultado}`);
})