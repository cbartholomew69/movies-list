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

context('Pagination', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/commands') //not sure if this is correct but it passes.  
  })

  it('.find()', () => {
    cy.get('.pagination-md').find('li').find('a').should('have.length', 9)

    cy.go('forward')
    cy.go('back')
  })
})

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/commands/actions')
  })

  it('.click() click DOM element', () => {
    cy.get('.btn-primary').click() // not sure if this is the same as up top?
  })
 })

 context('Querying', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/commands/querying')
  })
  it('cy.root() - query root DOM element and location', () => {
    cy.root().should('match', 'html')
    cy.location().should((loc) => {
      expect(loc.href).to.include('commands/querying')
    })
  })
 })
})