describe("tests", () => {
  it("success test", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('[data-cy="error-size"]').check("orta").should("be.checked");

    cy.get('[data-cy="error-extra-item-pepperoni"]')
      .check()
      .should("be.checked");

    cy.get('[data-cy="error-extra-item-sosis"]').check().should("be.checked");

    cy.get('[data-cy="error-extra-item-kanada-jambonu"]')
      .check()
      .should("be.checked");

    cy.get('[data-cy="error-extra-item-tavuk-izgara"]')
      .check()
      .should("be.checked");

    cy.get('[data-cy="error-fullName"]').type("Hakan Sahin");

    cy.get('button[type="submit"]').should("not.be.disabled").click();

    cy.url().should("include", "/success");
  });

  it("inputs are not to be an empty", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('[data-cy="error-fullName"]')
      .type("Hakan Sahin")
      .should("not.be.empty");

    cy.get('[data-cy="error-note"]')
      .type("bol sosisli olsun")
      .should("not.be.empty");
  });

  it("can checked more than 1 extra", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('[data-cy="error-extra-item-pepperoni"]')
      .check()
      .should("be.checked");

    cy.get('[data-cy="error-extra-item-sosis"]').check().should("be.checked");

    cy.get('[data-cy="error-extra-item-kanada-jambonu"]')
      .check()
      .should("be.checked");

    cy.get('[data-cy="error-extra-item-tavuk-izgara"]')
      .check()
      .should("be.checked");
  });
});
