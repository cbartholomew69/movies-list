describe('First Test', () => {
  it('Visit Movie List App', () => {
    cy.visit('http://localhost:3000')
  })

  it('has title', () => {
    cy.title().should('include', 'Movie List')
  })
})

describe('check for the words Alice in Wonderland', () => {
  it('checks for text, Alice in Wonderland', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Alice in Wonderland')
  })

  it('checks for img', () => {
    cy.get('img').invoke('attr', 'https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg')
  })

  it('dropdown btn', () => {
    cy.get('.btn-sm.btn-default')
  })
})