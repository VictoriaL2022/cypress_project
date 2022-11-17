/// <reference types ="cypress"/>


describe('groupBugHunters', () => {
    xit('AT007 | Sign In', () => {
        cy.visit('https://openweathermap.org')
        cy.get('.user-li a[href="https://openweathermap.org/home/sign_in"]').click({force: true} )
        cy.get('.input-group #user_email')
        cy.get('.input-group #user_password')
        cy.get('#user_remember_me').check().should('be.checked')
        cy.get('.btn').contains('Submit').click()
      });
    
      xit('AT008 | Create account', () => {
        cy.visit('https://openweathermap.org')
        cy.get('.user-li a[href="https://openweathermap.org/home/sign_in"]').click({force: true} )
        cy.get('a[href="/users/sign_up"]').click()
        cy.url().should('include', '/users/sign_up')
        cy.get('#user_username')
        cy.get('#user_email')
        cy.get('#user_password')
        cy.get('#user_password_confirmation')
        cy.get('#agreement_is_age_confirmed')
        cy.get('#agreement_is_accepted')
        //cy.get('#recaptcha-anchor')
      });
    
      it('009| Create account', () => {
        cy.visit('https://openweathermap.org')
        cy.get('#desktop-menu a[href="https://home.openweathermap.org/marketplace"]').click()
        cy.get('#desktop-menu a[href*="marketplace"]').click({force: true})
        //cy.url().should('eq', 'https://home.openweathermap.org/marketplace')
        cy.get('#desktop-menu a[href="/history_bulks/new"]').should('be.visible')
    })
      });
    
    xit('AT_033 | Header > Navigation', () => {
        cy.visit('https://openweathermap.org')
        cy.get('#desktop-menu a[href="/guide"]').click({force: true})
        cy.url().should('include', '/guide')
    });
    
    xit('AT033 | Header > Navigation > API', () => {
      cy.visit('https://openweathermap.org')
      cy.get('#desktop-menu a[href="/api"]').click({force: true})
      cy.url().should('include', '/api')
      //cy.get('.breadcrumb-title').should('be.visible') don`t include to the test
    });
        
  xit('AT_009 | Main menu > Marketplace', () => {
    cy.visit('https://openweathermap.org')
    cy.get('#desktop-menu a[href="https://home.openweathermap.org/marketplace"]').click({force: true})
    cy.url().should('eq', 'https://home.openweathermap.org/marketplace')
    // locator for history bulk
  });

xit('AT_013 | Blog > URL', () => {
  cy.visit('https://openweathermap.org')
  cy.get('#desktop-menu a[href="https://openweather.co.uk/blog/category/weather"]').click({force: true})
  cy.url('eq','https://openweather.co.uk/blog/category/weather')
  cy.get()// how to get all 10 elements?
  
});

xit('AT_016 | Support and FAQ ', () => {
  cy.visit('https://openweathermap.org')
  cy.get('#support-dropdown').click({force: true})
  cy.get('.dropdown-menu a[href="/faq"]').click({force: true})
  //On a FAQ page (Frequently Asked Questions)open several questions by clicking on plus sign
});

xit('AT_016 | Support and FAQ ', () => {
  cy.visit('https://openweathermap.org')
  cy.get('#support-dropdown').click({force: true})
  cy.get('.dropdown-menu a[href="/faq"]').click({force: true})
});