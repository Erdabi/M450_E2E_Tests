describe('open google', () => {
    it('passes', () => {
      cy.visit('https://google.com')
      cy.get("#L2AGLb").click()
      cy.get("#APjFqb").type("granatapfel{enter}")
      cy.get(".FMKtTb UqcIvb").click()
    })
  })