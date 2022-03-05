/// <reference types="cypress" />

import HomePage from '../../support/pageObjects/HomePage'



describe('Test ability to save properties so it can be reviewed at a later time', ()=> {
  const homePage = new HomePage()
  var firstPropName = ''
  var secondPropName = ''
  var thirdPropName = ''
  before('Will execute once before every run',()=> { 
    cy.visit('/')
    
  })

  it('Scroll to the bottom of the page to display all results', ()=> {
    cy.scrollToBottom()
    cy.scrollTo('top')
  })

  it('Select a couple random cards to favorite', ()=> {
    cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
      if(index == 0){
        firstPropName = $el.find('.bt-teaser__link').text()
        cy.log(firstPropName)
        cy.wrap($el).find('.button__Button-sc-1ndptzy-0').click()
      }
      if(index == 1){
        secondPropName = $el.find('.bt-teaser__link').text()
        cy.log(secondPropName)
        cy.wrap($el).find('.button__Button-sc-1ndptzy-0').click()
      }
      if(index == 2){
        thirdPropName = $el.find('.bt-teaser__link').text()
        cy.log(thirdPropName)
        cy.wrap($el).find('.button__Button-sc-1ndptzy-0').click()
      }
    })
  })

  

  it('click on heart to access favorites list', ()=> {
    
      cy.get('.SearchContent__StyledIcon-sc-15gjq1q-15 > path').click({force: true})
  })

  it('verify favorties list contains properties favorted in previous test', ()=>{
    //verify property names exist
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
})

describe('Second test suite', ()=>{
  it('case 1', ()=>{
    cy.log("first test case")
  })
})