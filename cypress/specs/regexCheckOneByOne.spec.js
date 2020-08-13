import Utilities from '../support/Utilities.js';

const testData = require("../fixtures/emails.json");

describe("Email RegEx Check One By One", () => {
    const util = new Utilities();

    it("Collect and save email addresses", () => {
        cy.collectAndSaveEmails('Delphine');
    });
    testData.forEach((testDataRow) => {
        const data = {
            email: testDataRow,
        };

        it(`Assert the email:${data.email} matches the regex`, () => {
            assert.match(data.email, util.getEmailRegex());
        });
    });
});



