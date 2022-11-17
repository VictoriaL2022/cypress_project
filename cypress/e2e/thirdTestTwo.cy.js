describe('Find elements', () => {
    
    before(() => {
        cy.visit('https://example.cypress.io')
    });

    it('verify hash', () => {
        cy.get('[href= "/commands/location"]').contains('hash').should('be.visible')
    });
});