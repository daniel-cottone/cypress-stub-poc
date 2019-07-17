context('/', () => {
  beforeEach(() => {
    cy.onFoo(foo => {
      console.log('before stub', foo);
      cy.stub(foo, 'foo').as('bar');
    });
    cy.visit('/');
  });

  describe('App', () => {
    it('should call foo', () => {
      cy.get('#foo').should('exist');
      cy.get('#foo').should('have.text', 'bar');
      cy.get('@foo').should('have.been.called');
    });
  });
});
