describe('Homework', () => {
  const baseUrl = 'http://login.qa.studio';

  //1

  it('Positive login test', () => {
    cy.visit(baseUrl);
    cy.get('#mail').type('USER_LOGIN');
    cy.get('#pass').type('USER_PASSWORD');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });

  //2
  it('Recovery password', () => {
    cy.visit(baseUrl);
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('USER_LOGIN');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });

  //3
  it('Correct login and incorrect password', function () {
    cy.visit(baseUrl);
    cy.get('#mail').type('USER_LOGIN');
    cy.get('#pass').type('INCORRECT_USER_PASSWORD');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })


  //4
  it('Incorrect login and correct password', function () {
    cy.visit(baseUrl);
    cy.get('#mail').type('INCORRECT_USER_LOGIN');
    cy.get('#pass').type('USER_PASSWORD');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })


  //5
  it('Validation for the presence of @', function () {
    cy.visit(baseUrl);
    cy.get('#mail').type('INCORRECT_USER_LOGIN');
    cy.get('#pass').type('USER_PASSWORD');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })

  //6
  it('Validation for hight case', function () {
    cy.visit(baseUrl);
    cy.get('#mail').type('INCORRECT_USER_LOGIN');
    cy.get('#pass').type('USER_PASSWORD');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })

});


