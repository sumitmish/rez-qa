/// <reference types="cypress" />

describe('Verify property indicator works as intended in the main hub AND in the property detail’s view .', ()=>{
    const firstIndex = Math.floor(Math.random() * (12 - 1) ) + 1
    var firstPropName = ''
    

    before('Will execute once before every run',()=> {  
      cy.visit('/') 
      //cy.get('.sqs-cookie-banner-v2-accept').click()
      cy.scrollToBottom()
      cy.log(firstIndex)
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('')
      })
  
    it('Select a property and save it by clicking the heart', ()=>{
      cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
        if(index == firstIndex){
          firstPropName = $el.find('.bt-teaser__link').text()
          cy.log(firstPropName)
          //make sure heart is visible before clicking
          cy.get('.button__Button-sc-1ndptzy-0').should('be.visible')
          cy.wrap($el).find('.button__Button-sc-1ndptzy-0').click()
        }
      })
    })
  
    it('Verify heart is toggled to "red"/saved status', ()=>{
        cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
            if(index == firstIndex){
              firstPropName = $el.find('.bt-teaser__link').text()
              //Verify heart is toggled to "red"
              cy.wrap($el).find('.button__Button-sc-1ndptzy-0').invoke('attr', 'aria-checked').should('eq', 'true')
            }
          })
    })
  
    it('Un-select the same property by clicking the heart', ()=>{
        cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
            if(index == firstIndex){
              firstPropName = $el.find('.bt-teaser__link').text()
              cy.log(firstPropName)
              cy.get('.button__Button-sc-1ndptzy-0').should('be.visible')
              cy.wrap($el).find('.button__Button-sc-1ndptzy-0').click()
            }
          })
    })
  
    it('Verify heart is toggled to "white"/un-saved status', ()=>{
        cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
            if(index == firstIndex){
              firstPropName = $el.find('.bt-teaser__link').text()
              //Verify heart is toggled to "white"
              cy.wrap($el).find('.button__Button-sc-1ndptzy-0').invoke('attr', 'aria-checked').should('eq', 'false')
            }
          })
    })
  
    it('Click an image of a property to access the detailed view page', ()=>{
        cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
            if(index == firstIndex){
              firstPropName = $el.find('.bt-teaser__link').text()
              cy.log(firstPropName)
              //makes sure property name is visible before clicking 
              cy.wrap($el).find('.bt-teaser__link').should('be.visible').click()
            }
          })
    })

    it("Verify page is viewing the correct property details page", ()=>{
        //verifys name of the property title is correct 
        cy.get('.hNLaqX').should('have.text', firstPropName)
    })
  
    it('Click "save" to save the property and navigate to main hub', ()=>{
        cy.contains('Save').click()
        cy.wait(1000)
        cy.go('back')
    })

    it('Verify total saved count on the main hub', ()=>{
        cy.get('.bt-favorites-link__count').should('have.text', '(1)')
    })

    after('execute after all tests', ()=>{
      cy.scrollTo('top')
    })

})
