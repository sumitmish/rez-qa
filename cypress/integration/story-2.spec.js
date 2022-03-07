/// <reference types="cypress" />
import FilterPage from '../support/pageObjects/FilterPage'


describe('ability to filter properties based on the number of bedrooms and bathrooms.', ()=>{
    const filterPage = new FilterPage()

    before('Will execute once before every run',()=> { 
        cy.visit('/') 
        cy.scrollToBottom()
        cy.get('.sqs-cookie-banner-v2-accept').click()
      })

    // it('1. Filter for 4+ bedrooms', ()=>{
    //     cy.get('.iconButton__GridSpan-sc-17w1wfw-1 > .bt-hide-small').click({force: true})

    //     // test 4 bedrooms
    //     for(let n = 0; n < 4; n ++){
    //         filterPage.bedroomPlus().click()
    //         cy.wait(1000)
    //       }
    //       //Clicking on view results. Had to use .then because was receiving "element detached from DOM error"
    //       filterPage.viewResults().then(($el)=>{
    //         $el.click()
    //       })
        
    // })

    // it('2. Verify all properties have 4+ bedrooms', ()=>{
    //   cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
    //       var bedInfo = $el.find('.bt-teaser__info').text()
    //       cy.log(bedInfo)
    //       // store bedInfo string in an array and parse out room #
    //       var arr = Array.from(bedInfo)
    //       var char = arr[6]
    //       var charInt = parseInt(char)
    //       //if room number is less than 4, throw an error 
    //       if(charInt < 4){
    //         throw new Error("Found property with less than 3 bedrooms")
    //       }
    //   })
    // })

    it('3. Verify filter page ability to add baths', ()=>{
      cy.get('.iconButton__GridSpan-sc-17w1wfw-1 > .bt-hide-small').click({force: true})
      // test 3 baths
      for(let n = 0; n < 3; n ++){
          filterPage.bathroomPlus().click()
          cy.wait(1000)
        }
        //Clicking on view results. Had to use .then because was receiving "element detached from DOM error"
        filterPage.viewResults().then(($el)=>{
          $el.click()
        })
      
    })

    it('2. Verify all properties have 3+ bathrooms', ()=>{
      cy.get('.Teaser__TeaserWrapper-sc-1l1hiu6-0').each(($el,index,list)=>{
          var bathInfo = $el.find('.bt-teaser__info').text()
          cy.log(bathInfo)
          // store bedInfo string in an array and parse out room #
          var arr = Array.from(bathInfo)
          var char = arr[17]
          var charInt = parseInt(char)
          cy.log(charInt)
          //if bath number is less than 3, throw an error 
          if(charInt < 3){
            throw new Error("Found property with less than 3 bedrooms")
          }
      })
    })

    it('Navigate to filter again and hit reset', ()=>{
      cy.get('.iconButton__GridSpan-sc-17w1wfw-1 > .bt-hide-small').click({force: true})
      cy.contains('Clear Filters').click()
      cy.wait(1000)
    })

    it('Verify bathrooms filter = 0', ()=>{
      cy.get('.bt-range-filter__value').eq(1).should('have.text', '0')
    })
})

