// versão de teste básica
describe('Suite de teste básico/simples', () => {
  it('1. Fazer login com sucesso', () => {
    cy.visit('/') // visits the baseUrl
    cy.get('#user_login').type('root')
    cy.get('#user_password').type('12345678')
    cy.get('#new_user > .submit-container > .btn').click()
    cy.get('.blank-state-welcome-title').should('be.visible').and('contains.text', 'Welcome to GitLab')
  })

  it('2. Criação e exclusão de projeto via GUI com sucesso', () => {
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

  it.only('3. Criar uma label e adicionar à issue', () => {
    cy.visit('/') // visits the baseUrl
    cy.get('#user_login').type('root')
    cy.get('#user_password').type('12345678')
    cy.get('#new_user > .submit-container > .btn').click()
    cy.get('.project-name').click()
    cy.get('.shortcuts-issues').trigger('mouseover')
    cy.contains('Labels').click({force:true})
    cy.get('#new_label_link').click()
    cy.get('#label_title').type('Etiqueta exemplo')
    cy.get('#label_description').type('Descrição da etiqueta')
    cy.get('.form-actions > .btn-success').click()
    cy.get('.shortcuts-issues').click()
    cy.get('.issue-title-text > a').click()
    cy.get('.labels > .title > .js-sidebar-dropdown-toggle').click()
    cy.get('.label-item').click()
    cy.get('.content-wrapper').click()
    cy.get('.dont-hide > a > .badge')
      .should('be.visible').and('have.text', 'Etiqueta exemplo')
  })
})