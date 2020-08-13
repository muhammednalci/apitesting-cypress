import Utilities from '../support/Utilities.js';

const testData = require("../fixtures/emails.json");

describe("Email RegEx Check One By One", () => {
    const util = new Utilities();
    context('Get all emails', () => {
        it("Collect and save email addresses", () => {
            cy.collectAndSaveEmails('Delphine');
        });
    });
    testData.forEach((testDataRow) => {
        const data = {
            email: testDataRow,
        };
        context(`Dynamically generated test for the email:${data.email}`, () => {
            it(`Assert the email:${data.email} matches the provided regex`, () => {
                assert.match(data.email, util.getEmailRegex());
            });
        });
    });
});



