class FilterPage {
    bedroomPlus()  {
        return cy.get(':nth-child(1) > .bt-range-filter > .range__InputWrapper-sc-8zcbhy-1 > .bt-range-filter__button--plus > svg').click()

    }

    viewResults()  {
        return cy.contains('View results').click() 
    }

    bathroomPlus()  {
        return cy.get(':nth-child(2) > .bt-range-filter > .range__InputWrapper-sc-8zcbhy-1 > .bt-range-filter__button--plus > svg').click() 
    }


}

export default FilterPage;