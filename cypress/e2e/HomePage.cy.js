describe("HomePage E2E", () => {
  it("should display all three pricing plans: Starter, Investor, and VIP", () => {
    cy.visit("http://localhost:3000/");

    // Verifica se existem exatamente 3 planos
    cy.get("section").should("have.length", 3);

    // Verifica se o plano Starter está presente
    cy.contains("h3", "Starter").should("be.visible");

    // Verifica se o plano Investor está presente
    cy.contains("h3", "Investor").should("be.visible");

    // Verifica se o plano VIP está presente
    cy.contains("h3", "VIP").should("be.visible");
  });

  it("should highlight VIP plan by default when no querystring parameters are provided", () => {
    cy.visit("http://localhost:3000/");

    // Verifica se o plano VIP está destacado por padrão
    cy.get('[data-plan="VIP"]').should("have.attr", "data-highlight", "true");

    // Verifica se os outros planos não estão destacados
    cy.get('[data-plan="Starter"]').should(
      "have.attr",
      "data-highlight",
      "false"
    );
    cy.get('[data-plan="Investor"]').should(
      "have.attr",
      "data-highlight",
      "false"
    );
  });

  it("should highlight Investor plan when querystring ?plan=investor is provided", () => {
    cy.visit("http://localhost:3000/?plan=investor");

    // Verifica se o plano Investor está destacado
    cy.get('[data-plan="Investor"]').should(
      "have.attr",
      "data-highlight",
      "true"
    );

    // Verifica se os outros planos não estão destacados
    cy.get('[data-plan="Starter"]').should(
      "have.attr",
      "data-highlight",
      "false"
    );
    cy.get('[data-plan="VIP"]').should("have.attr", "data-highlight", "false");
  });
});
