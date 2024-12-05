describe("main tests", () => {
  it("success test", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('[data-cy="error-size-label"]').click();
    cy.get('[data-cy="error-size"]').should("be.checked");

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

describe("extra tests for successfully website", () => {
  it('"aciktim" button on the home page redirects to the order page', () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-cy="aciktim-button"]').click();

    cy.url().should("include", "/order");
  });

  it("all values are fine, but 'full-name textarea' is wrong", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('[data-cy="error-size-label"]').click();
    cy.get('[data-cy="error-size"]').should("be.checked");

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

    cy.get('[data-cy="error-fullName"]').type("wr");

    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("all values are fine, but 'size' is not selected", () => {
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

    cy.get('[data-cy="error-fullName"]').type("Hakan Sahin");

    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("extras does not meet reqs (selected 3)", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('[data-cy="error-size-label"]').click();
    cy.get('[data-cy="error-size"]').should("be.checked");

    cy.get('[data-cy="error-extra-item-sosis"]').check().should("be.checked");

    cy.get('[data-cy="error-extra-item-kanada-jambonu"]')
      .check()
      .should("be.checked");

    cy.get('[data-cy="error-extra-item-tavuk-izgara"]')
      .check()
      .should("be.checked");

    cy.get('[data-cy="error-fullName"]').type("Hakan Sahin");

    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("extras does not meet reqs (selected 11)", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('[data-cy="error-size-label"]').click();
    cy.get('[data-cy="error-size"]').should("be.checked");

    cy.get('[data-cy="error-extra-item-sosis"]').check().should("be.checked");

    cy.get('[data-cy="error-extra-item-kanada-jambonu"]')
      .check()
      .should("be.checked");

    cy.get('[data-cy="error-extra-item-biber"]').check().should("be.checked");
    cy.get('[data-cy="error-extra-item-salam"]').check().should("be.checked");
    cy.get('[data-cy="error-extra-item-ananas"]').check().should("be.checked");
    cy.get('[data-cy="error-extra-item-domates"]').check().should("be.checked");
    cy.get('[data-cy="error-extra-item-kabak"]').check().should("be.checked");
    cy.get('[data-cy="error-extra-item-pepperoni"]')
      .check()
      .should("be.checked");
    cy.get('[data-cy="error-extra-item-misir"]').check().should("be.checked");
    cy.get('[data-cy="error-extra-item-sucuk"]').check().should("be.checked");
    cy.get('[data-cy="error-extra-item-sarimsak"]')
      .check()
      .should("be.checked");

    cy.get('[data-cy="error-fullName"]').type("Hakan Sahin");

    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("all values are selected expect pastry selection (not req)", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('[data-cy="error-size-label"]').click();
    cy.get('[data-cy="error-size"]').should("be.checked");

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
    cy.get('[data-cy="error-note"]').type("bol sosisli olsun");

    cy.get('button[type="submit"]').should("not.be.disabled").click();

    cy.url().should("include", "/success");
  });

  it("all values are selected expect note selection (not req)", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('[data-cy="error-size-label"]').click();
    cy.get('[data-cy="error-size"]').should("be.checked");

    cy.get('[data-cy="error-select"]')
      .select("kalin")
      .should("have.value", "kalin");

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
});
