describe('Orange HRM Test', () => {
   const selectorlist = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredencialAlert: "[role='alert']"
   }

  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type('Admin')
    cy.get(selectorlist.passwordField).type('admin123')
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorlist.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type('test')
    cy.get(selectorlist.passwordField).type('test')
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredencialAlert)
  })
})