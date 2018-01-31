describe('First Test', () => {
  it('Visit Movie List App', () => {
    cy.visit('http://localhost:3000')
  })

  it('has title', () => {
    cy.title().should('include', 'Movie List')
  })
})

describe('check for the words Alice in Wonderland', () => [
  it('checks for text, Alice in Wonderland', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Alice in Wonderland')
  })
])