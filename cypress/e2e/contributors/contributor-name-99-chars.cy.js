/// <reference types="cypress" />

import userData from '../../fixtures/contributors-fixtures/contributors-users.fixture.json'
import { qase } from 'cypress-qase-reporter/dist/mocha'

describe('contributor name with less than 100 characters', async function () {
  const workType = 'Book'
  const title = 'Cypress test contributors 24'
  const name =
    'namehas99charsnamehas99charsnamehas99charsnamehas99charsnamehas99charsnamehas99charsnamehas99chars!'

  before(() => {})

  qase(
    '24',
    it('contributor name with less than 100 characters (99)', function () {
      cy.visit(Cypress.env('signInURL'))
      cy.signin(userData.cyRecordOwner)

      //go to add work form
      cy.get('#cy-works').within(($myPanel) => {
        cy.get('#cy-menu-add-works').click()
      })
      cy.get('#cy-add-work-manually').click({ force: true })
      cy.wait(1000)
      cy.get('[formcontrolname="workType"]').click()
      cy.get('[role="listbox"], [aria-label="work-type-label"]')
        .contains(workType)
        .click()
      cy.get('#title-input').clear().type(title)
      cy.get('#cy-add-another-contributor').click()
      cy.get('app-work-contributors').within(() => {
        cy.get('[formcontrolname="creditName"]').clear().type(name)
        //leave default role
      })
      //save entry
      cy.get('#save-work-button').wait(1000).click({ force: true })

      //Verify work was added
      cy.get('#cy-works', { timeout: 10000 }).should('contain', title)
      //Verify name is displayed
      cy.get('#cy-works', { timeout: 10000 }).should('contain', name)
    })
  ) //end of qase tag

  after(() => {
    //log out
    cy.get('#cy-user-info').click({ force: true })
    cy.get('#cy-signout').click({ force: true })
  })
})
