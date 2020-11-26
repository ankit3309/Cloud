
describe('TestSuite', function()
{
    it('Verify Title of the Page', function()
    {
        cy.visit('https://www.lftechnology.com/')
        cy.title().should('eq', 'Leapfrog')    
    })



})