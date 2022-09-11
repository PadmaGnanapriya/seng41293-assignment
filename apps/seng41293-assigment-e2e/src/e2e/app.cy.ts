import { getGreeting } from '../support/app.po';

describe('seng41293-assigment', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome seng41293-assigment');
  });
});
