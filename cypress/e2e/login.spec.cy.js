import userdata from '../fixtures/user-data.json'


describe('Orange HRM Test', () => {
   const selectorlist = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredencialAlert: "[role='alert']"
   }

   

  it('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernameField).type(userdata.userSucess.username)
    cy.get(selectorlist.passwordField).type(userdata.userSucess.passsword)
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorlist.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernameField).type(userdata.userFail.username)
    cy.get(selectorlist.passwordField).type(userdata.userFail.passsword)
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredencialAlert)
  })
})