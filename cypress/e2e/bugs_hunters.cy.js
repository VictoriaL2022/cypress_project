
describe('8-day forecast', () => {
//     beforeEach(() => {
//         cy.visit('https://openweathermap.org/'); 
//     });
});

it('navigate to 8-day forecast ', () => {
    cy.visit('https://openweathermap.org/'); 
    cy.get('div.daily-container  h3').should('have.text', '8-day forecast');

});

// it('it has 8-day list', () => {
//     cy.get('ul.day-list').should('have.length', 8); 
// });



