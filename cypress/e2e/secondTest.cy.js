describe('my first test', () => {
    it ('run web site', () => {
       cy.visit('https://example.cypress.io');
       cy.get('.dropdown-toggle').click();
  cy.get('.dropdown-menu a[href="/commands/location"]').click();
  cy.url().should('include','/commands/location')
    })
})


