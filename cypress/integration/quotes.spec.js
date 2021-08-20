describe ('Pizza Order App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234')
    })

    const nameInput = () => cy.get('input[name=name]')
    const foobarInput = () => cy.get('input[name=foobar]')

    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5) // strict ===
        expect({}).not.to.equal({})   // strict ===
        expect({}).to.eql({})         // not strict
      })

      describe('Filling out the input')
      it('can type in the inputs', () => {
        nameInput()
          .should('have.value', '')
          .type('John Doe')
          .should('have.value', 'John Doe')
      })

      describe('Checboxes can be checked', () => {
        it('can be checked')
        cy.get('[type="checkbox"]').check()
      })
})