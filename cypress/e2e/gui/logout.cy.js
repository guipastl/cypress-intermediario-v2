describe('Logout', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/users/sign_in')
    })

    it('successfully', () => {
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
})