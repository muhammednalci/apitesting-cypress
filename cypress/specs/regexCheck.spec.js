

describe('Email RegEx Check', () => {
    it('Get all emails in comments that gave to all posts of specific user', () => {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        cy.collectAndSaveEmails('Delphine');
        cy.readFile('cypress/fixtures/emails.json').each(($email) => {
            assert.match($email, regex);


        })

    });
});
