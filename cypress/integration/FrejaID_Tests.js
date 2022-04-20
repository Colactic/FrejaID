describe('Test the "REGISTRERING FOR FREJA" button', () => {
    it('Click the "REGISTRERING FOR FREJA" button and make sure the panel is visible and url is correct', () => {
        cy.visit('https://frejaeid.com/vanliga-fragor/')
        cy.scrollTo(0, 500)
        cy.get('div.fusion-align-block').eq(0).click()
        cy.get('div.accordian.fusion-accordian').should('exist').and('be.visible')
        cy.url().should('include', '/vanliga-fragor/freja-eid-plus-sv/')
    })
})

describe('Test the "MIN ANSOKAN GODKANDES INTE" button', () => {
    it('Click the Home button and check the URL', () => {
        cy.visit('https://frejaeid.com/vanliga-fragor/')
        cy.scrollTo(0, 500)
        cy.get('div.fusion-align-block').eq(1).click()
        cy.get('div.fusion-fullwidth.fullwidth-box.fusion-builder-row-2.nonhundred-percent-fullwidth.non-hundred-percent-height-scrolling').should('exist').and('be.visible')
        cy.get('div.fusion-fullwidth.fullwidth-box.fusion-builder-row-3.nonhundred-percent-fullwidth.non-hundred-percent-height-scrolling').should('exist').and('be.visible')
        cy.get('div.fusion-fullwidth.fullwidth-box.fusion-builder-row-4.nonhundred-percent-fullwidth.non-hundred-percent-height-scrolling').should('exist').and('be.visible')
        cy.url().should('include', '/vanliga-fragor/hjalp-med-id-handling/')
    })
})

describe('Test the "GENERELLA FRAGOR" button', () => {
    it('Click the "GENERELLA FRAGOR" button and make sure the panel is visible and url is correct', () => {
        cy.visit('https://frejaeid.com/vanliga-fragor/')
        cy.scrollTo(0, 500)
        cy.get('div.fusion-align-block').eq(2).click()
        cy.get('div.accordian.fusion-accordian').should('exist').and('be.visible')
        cy.url().should('include', '/vanliga-fragor/om-freja-eid/')
    })
})

describe('Test the "DELAD KONTROLL" button', () => {
    it('Click the "DELAD KONTROLL" button and make sure the panel is visible and url is correct', () => {
        cy.visit('https://frejaeid.com/vanliga-fragor/')
        cy.scrollTo(0, 500)
        cy.get('div.fusion-align-block').eq(3).click()
        cy.get('div.accordian.fusion-accordian.feid-text-dark').should('exist').and('be.visible')
        cy.url().should('include', '/vanliga-fragor/delad-kontroll/')
    })
})

describe('Test the "COVIDBEVIS I FREJA" button', () => {
    it('Click the "COVIDBEVIS I FREJA" button and make sure the panel is visible and url is correct', () => {
        cy.visit('https://frejaeid.com/vanliga-fragor/')
        cy.scrollTo(0, 500)
        cy.get('div.fusion-align-block').eq(4).click()
        cy.get('div.accordian.fusion-accordian.feid-text-dark').should('exist').and('be.visible')
        cy.url().should('include', '/vanliga-fragor/covidbevis/')
    })
})

describe('Test the "ORGANISATIONS ID" button', () => {
    it('Click the "ORGANISATIONS ID" button and make sure the panel is visible and url is correct', () => {
        cy.visit('https://frejaeid.com/vanliga-fragor/')
        cy.scrollTo(0, 500)
        cy.get('div.fusion-align-block').eq(5).click()
        cy.get('div.accordian.fusion-accordian.feid-text-dark').should('exist').and('be.visible')
        cy.url().should('include', '/vanliga-fragor/organisations-eid/')
    })
})

describe('Test the "INTEGRITET" button', () => {
    it('Click the "INTEGRITET" button and make sure the panel is visible and url is correct', () => {
        cy.visit('https://frejaeid.com/vanliga-fragor/')
        cy.scrollTo(0, 500)
        cy.get('div.fusion-align-block').eq(6).click()
        cy.get('div.accordian.fusion-accordian').should('exist').and('be.visible')
        cy.url().should('include', '/vanliga-fragor/gdpr-sv/')
    })
})

describe('Test the "KONTAKTA OSS" page', () => {
    it('Visit the "KONTAKTA OSS" page and make sure the two "FREJA SUPPORT" and "SPARRA FREJA" boxes exist and are visible', () => {
        cy.visit('https://frejaeid.com/kontakta-oss/')
        cy.get('div.fusion-builder-row.fusion-row').eq(0).should('exist').and('be.visible')
        cy.get('div.fusion-builder-row.fusion-row').eq(1).should('exist').and('be.visible')
    })
})

describe('Test the "KONTAKTA OSS" links', () => {
    it('Visit the "KONTAKTA OSS" page and make sure the phone link and e-mail link exists', () => {
        cy.visit('https://frejaeid.com/kontakta-oss/')
        cy.contains('+46 8-38 88 58').should('exist')
        cy.contains('support@frejaeid.com').should('exist')
    })
})