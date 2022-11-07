describe('my first test', () => {
    it ('run web site', () => {
       cy.visit('https://example.cypress.io')
       cy.get('a[href="/commands/querying"]').contains('get').click()
    })
})
