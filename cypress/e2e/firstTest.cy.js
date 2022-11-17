/// <reference types="cypress"/> 

//Cntrl F - find by string, selector or XPath
//use [] if we dont have class or ID info
// use . if we need class without ""
// use # if we need TEXT
// use , to fix the element you need to use
// <div is HTML tag 
//shift + END = selects text untill end
// always access to the attribute through [] ex. a[href="/commands/querying"]

/// <reference types ="cypress"/>

describe('my first test', () => {
    xit ('clicking "type" navigates to a new url', () => {
       cy.visit('https://example.cypress.io')
       cy.contains('type').click()
       cy.url().should('include', '/commands/actions')
  
    })
})

describe('my first test', () => {
    xit ('clicking "type" navigates to a new url', () => {
       cy.visit('https://example.cypress.io')
       //cy.contains('Querying').click()
       cy.get('.home-list a[href="/commands/querying"]').contains('Querying').click()
       cy.url().should('include', '/commands/querying')
    cy.go('back');
    });
});

describe('my first test', () => {
    xit ('clicking "type" navigates to a new url', () => {
       cy.visit('https://example.cypress.io')
       //cy.contains('Querying').click()
       cy.get('.home-list a[href="/commands/querying"]').contains('Querying').click()
       cy.url().should('include', '/commands/querying')
    cy.go('back');
    });
});


describe('my first test', () => {
    xit ('clicking "type" navigates to a new url', () => {
       cy.visit('https://example.cypress.io')
       cy.get('.nav a[href="/cypress-api"]').click();

    });
});

describe('', () => {

    before(() => {
        cy.visit('https://example.cypress.io')

});
    xit('verify hash', () => {

    cy.get('[href="/commands/location"]').contains('hash').should('be.visible'); //proove that its visible 
});
});



describe('first attempt', () => {
    xit('find element "children"', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('children').click(); //specify where the click is
        cy.url().should('include', '/commands/traversal') //going to the next url where '/commands/traversal'
         cy.get('#children a').click(); 
         //cy.get('#children > a').click(); //also works
      
    });
    xit('find element "blur"', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('blur').click();
        cy.url().should('include', '/commands/actions')
        cy.get('#blur a')
        
    });
    xit('find element "Utilities"', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('Utilities').click();
        cy.url().should('include', '/utilities')
        cy.get('a[href="https://on.cypress.io/_"]').contains('docs.cypress.io').click();
    });

    xit('find element "London, GB"', () => {
        cy.visit('https://openweathermap.org/');
        cy.get('h2[style="margin-top: 0px;"]').contains('London, GB').click();
    });

});
xit('find element "Thu, Nov 10"', () => {
    cy.visit('https://openweathermap.org/');
    cy.get('div.daily-container span').contains('Thu, Nov 10').click();
    cy.get('div.daily-container p').contains('Broken clouds. Moderate breeze.');
});
