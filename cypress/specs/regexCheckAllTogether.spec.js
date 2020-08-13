import Utilities from '../support/Utilities.js';


describe('Email RegEx Check All Together', () => {
    const util = new Utilities();
    it('Get all emails in comments and assert as group', () => {
        cy.collectAndSaveEmails('Delphine');
        cy.readFile('cypress/fixtures/emails.json').each(($email) => {
            assert.match($email, util.getEmailRegex());
        })
    });
});
