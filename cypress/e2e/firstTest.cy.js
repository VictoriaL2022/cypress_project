describe('my first test', () => {
    xit ('clicking "type" navigates to a new url', () => {
       cy.visit('https://example.cypress.io')
       cy.contains('type').click()
       cy.url().should('include', '/commands/actions')
  
    })
})
//Cntrl F - find by string, selector or XPath
//use [] if we dont have class or ID info
// use . if we need class without ""
describe('my first test', () => {
    it ('clicking "type" navigates to a new url', () => {
       cy.visit('https://example.cypress.io')
       //cy.contains('Querying').click()
       cy.get('.home-list a[href="/commands/querying"]').contains('Querying').click()
       cy.url().should('include', '/commands/querying')
    cy.go('back')
    });
});

