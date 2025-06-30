// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const cypress = require("cypress")


Cypress.Commands.add('postUser', (user) => {
  return cy.api({
    method: 'POST',
    url: '/api/users/register',
    body: user,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })

})

Cypress.Commands.add('getUsers', () => {
  return cy.api({
    method: 'GET',
    url: '/api/users',
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
})


Cypress.Commands.add('putUser', (userId, updatedUser) => {
  return cy.api({
    method: 'PUT',
    url: '/api/users/' + userId,
    headers: {
      'Contente-Type': 'application/json',
    },
    body: updatedUser,
    failOnStatusCode: false
  })

})

Cypress.Commands.add('deleteUser', (userId) => {
  cy.api({
    method: 'DELETE',
    url: 'http://localhost:3333/api/users/' + userId,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
})