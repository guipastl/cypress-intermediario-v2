// versão de teste básica
describe('Suite de teste básico/simples', () => {
  it('1. Fazer login com sucesso', () => {
    cy.visit('/') // visits the baseUrl
    cy.get('#user_login').type('root')
    cy.get('#user_password').type('12345678')
    cy.get('#new_user > .submit-container > .btn').click()
    cy.get('.blank-state-welcome-title').should('be.visible').and('contains.text', 'Welcome to GitLab')
  })

  it.only('2. Criação e exclusão de projeto via GUI com sucesso', () => {
    cy.login()
    cy.contains('Create a project').click()
    cy.get('#project_name').type('Projeto teste')
    cy.contains('Create project').click()
    cy.get('.flash-notice > span')
      .should('be.visible')
      .and('have.text', "Project 'Projeto teste' was successfully created.")
    cy.get('.shortcuts-tree').click()
    cy.contains('Advanced').click()
    cy.get(':nth-child(6) > form > .btn').click()
    cy.get('#confirm_name_input').type('projeto-teste')
    cy.get('.form-actions > .btn').click()
    cy.get('.flash-notice > span')
      .should('be.visible')
      .and('have.text', "Project 'Administrator / Projeto teste' is in the process of being deleted.")
  })
})