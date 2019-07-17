context('/', () => {
  beforeEach(() => {
    cy.onFoo(foo => {
      cy.stub(foo, 'foo')
        .returns('bar')
        .as('bar')
    })
    cy.visit('/')
  })

  describe('App', () => {
    it('should call foo', () => {
      cy.get('#foo').should('exist')
      cy.get('#foo').should('have.contain', 'bar')
      cy.get('@bar').should('have.been.called')
    })
  })
})
