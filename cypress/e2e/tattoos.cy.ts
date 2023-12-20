describe("Given the TattoosPage", () => {
  describe("When the user clicks on Add Tattoo link and creates a new tattoo and then clicks on delete button", () => {
    it("Should show the new tattoo added in Tattoos Page and the tattoo should be deleted when clicked the trash button", () => {
      cy.visit("http://localhost:5173");

      cy.get("a")
        .contains(/add tattoo/i)
        .click();

      cy.get("label")
        .contains(/artist/i)
        .click()
        .type("Yana");

      cy.get("label").contains(/email/i).click().type("yanasollogub@gmail.com");
      cy.get("label")
        .contains(/instagram/i)
        .click()
        .type("https://www.instagram.com/yanasollogub");
      cy.get("label").contains(/city/i).click().type("Terrassa");
      cy.get("label")
        .contains(/direction/i)
        .click()
        .type(
          "https://www.google.com/maps/place/Terrassa,+Barcelona/@41.5582438,1.975935,13z/data=!3m1!4b1!4m6!3m5!1s0x12a492e820fabbfd:0xab0d33c5f2c73098!8m2!3d41.5631482!4d2.0054917!16zL20vMGoycTc?entry=ttu",
        );
      cy.get("label").contains(/style/i).click().type("cute");
      cy.get("label")
        .contains(/image/i)
        .click()
        .type("https://i.redd.it/f80snead72k91.jpg");
      cy.get("label")
        .contains(/notes/i)
        .click()
        .type("ask via instagran{enter}");

      cy.contains(/loading.../i).should("exist");
      cy.contains(/loading.../i).should("not.exist");

      cy.contains(/the tattoo has been created succesfully!/i).should("exist");
      cy.contains(/the tattoo has been created succesfully!/i, {
        timeout: 4000,
      }).should("not.exist");

      cy.get("h2").contains(/yana/i).should("exist");

      cy.get("h2")
        .contains(/yana/i)
        .closest("article")
        .find("button.tattooCard__button")
        .click();

      cy.contains(/tattoo deleted succesfully!/i).should("exist");
      cy.contains(/tattoo deleted succesfully!/i, { timeout: 4000 }).should(
        "not.exist",
      );
    });
  });
});
