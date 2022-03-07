/// <reference types="cypress" />

import HomePage from '../support/pageObjects/HomePage'

describe('Test ability to save 3 properties and ability to view the same properties in the favorites page', ()=> {
  const homePage = new HomePage()
  // Assigning random numbers to each constant
  const firstIndex = Math.floor(Math.random() * (12 - 1) ) + 1
  const secondIndex = Math.floor(Math.random() * (24 - 12) ) + 12
  const thirdIndex = Math.floor(Math.random() * (35 - 24) ) + 24
  var firstPropName = ''
  var secondPropName = ''
  var thirdPropName = ''

  before('Will execute once before every run',()=> { 
    cy.visit('/') 
    cy.scrollToBottom()
    cy.log(firstIndex+' ' + secondIndex + ' ' + thirdIndex)
    cy.get('.sqs-cookie-banner-v2-accept').click()
  })

  it('1. Favorite 3 properties', ()=> {
    cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
      if(index == firstIndex){
        firstPropName = $el.find('.bt-teaser__link').text()
        cy.log(firstPropName)
        //make sure heart is visible before clicking
        cy.wrap($el).find('.button__Button-sc-1ndptzy-0').should('be.visible')
        cy.wrap($el).find('.button__Button-sc-1ndptzy-0').click()
      }
      if(index == secondIndex){
        secondPropName = $el.find('.bt-teaser__link').text()
        cy.log(secondPropName)
        //make sure heart is visible before clicking
        cy.wrap($el).find('.button__Button-sc-1ndptzy-0').should('be.visible')
        cy.wrap($el).find('.button__Button-sc-1ndptzy-0').click()
      }
      if(index == thirdIndex){
        thirdPropName = $el.find('.bt-teaser__link').text()
        cy.log(thirdPropName)
        //make sure heart is visible before clicking
        cy.wrap($el).find('.button__Button-sc-1ndptzy-0').should('be.visible')
        cy.wrap($el).find('.button__Button-sc-1ndptzy-0').click()
      }
    })
  })

  it('2. Verify indicator shows the total count(3) of saved properties', ()=>{
    cy.get('.bt-favorites-link__count').should('have.text', '(3)')
  })

  it('3. Click on heart icon next to "Map View" to access favorites list', ()=> {
      cy.get('.SearchContent__StyledIcon-sc-15gjq1q-15 > path').click({force: true})
  })

  it('4. Verify the properties favorited exist in the favorited list', ()=>{
    cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
      var foundText = $el.find('.bt-teaser__link').text()
      if(foundText == firstPropName) {
        cy.log("Found first saved property in favorites: " + firstPropName)
      }
      if(foundText == secondPropName) {
        cy.log("Found second saved property in favorites: " + secondPropName)
      }
      if(foundText == thirdPropName) {
        cy.log("Found third saved property in favorites: " + thirdPropName)
      }
    })
  })
  
  it('5. Un-save a property from the filtered view', ()=>{
    cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
      var propName = $el.find('.bt-teaser__link').text()
      cy.log(propName)
      if(propName == firstPropName){ 
        $el.find('.button__Button-sc-1ndptzy-0').click()
      }  
    })
  })

  it('6. Verify removed property', ()=>{
    cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
      var propName = $el.find('.bt-teaser__link').text()
      if(propName == firstPropName) {
        throw new Error("Property was not removed from favorites list")
      }
    })
  })

  after('execute after all tests', ()=>{
    cy.scrollTo('top')
    cy.get('.dismissButton').click()
    
  })
})







