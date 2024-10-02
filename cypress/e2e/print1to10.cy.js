describe('Print Numbers from 1 to 10', () => {
    it('prints numbers from 1 to 10', () => {
      for (let i = 1; i <= 10; i++) {
        cy.log('saloni'+i); // Print the current number
      }
    });
  });
  