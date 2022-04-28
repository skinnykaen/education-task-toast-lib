describe('Toast test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  it('check add', () => {
    cy.get('[data-cy=info]')
    cy.get('[data-cy=error]')
  })
  it('check delete', () => {
    cy.get('[data-cy=wrapper]')
    .should('have.length', 2)
    cy.get('[data-cy=closeIconinfo]')
    .click()
    cy.get('[data-cy=wrapper]')
    .should('have.length', 1)
  })
})
