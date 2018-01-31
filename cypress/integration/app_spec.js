describe('First Test', () => {
  it('Visit Movie List App', () => {
    cy.visit('http://localhost:3000')
  })

  it('has title', () => {
    cy.title().should('include', 'Movie List')
  })
})