/// <reference types="cypress" />

describe('Test ability to save properties so it can be reviewed at a later time', ()=> {
  it('Each property should have Favorite on/off', ()=> {
    cy.visit('/')
    cy.scrollToBottom()   
  })
})