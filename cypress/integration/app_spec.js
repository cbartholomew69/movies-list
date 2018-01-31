describe('First Test', () => {
  it('Visit Movie List App', () => {
    cy.visit('/')
  })

  it('has title', () => {
    cy.title().should('include', 'Movie List')
  })

  it('checks for img', () => {
    cy.get('img').invoke('attr', 'https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg')
  })

  it('has dropdown btn', () => {
    cy.get('.btn-sm.btn-default')
  })
  
  it('has btn-primary', () => {
    cy.get('.btn-primary').click
    cy.get('input').type('Test')
  })

  it('.find()', () => {
    cy.get('.btn-default')
    cy.get('.btn-success').click
  })

  it('gets next immediate sibiling DOM element', () => {
    cy.visit('/')
    cy.get('.movie-row a:first').next()
})

describe('check for the words Alice in Wonderland', () => {
  it('checks for text, Alice in Wonderland', () => {
    cy.visit('/')
    cy.contains('Alice in Wonderland')
  })
})
})