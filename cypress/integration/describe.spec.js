/// <reference types="cypress" />

// .only - Executa somente o teste. Ps: Quando possuir varios, pegará sempre o ultimo.
it.only('A external test...', () => {

})

describe('Grupo de Testes...' , ()=>{
    describe('Teste do grupo especifico...', () => {
        it('Teste Especifico...', () => {
            
        })
    })
})