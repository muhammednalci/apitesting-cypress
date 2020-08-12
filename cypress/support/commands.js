/**
 * search anything helper method
 * @url of the request like users, comments, posts etc.
 * @field of the request like username, userId, postId etc.
 * @query  what to search 
 */
Cypress.Commands.add('search', (url, field, query) =>
    cy.request(
        {
            method: 'GET',
            url: `/${url}?${field}=${query}`,
            failOnStatusCode: false
        }
    )
);

Cypress.Commands.add('collectAndSaveEmails', (nameOfUser) =>
    cy.search('users', 'username', nameOfUser).then((response) => {
        cy.search('posts', 'userId', response.body[0].id).then((response) => {
            var postIDs = response.body.map(function (item) { return item.id; });
            var m = 0;
            var i;
            var emails = [];
            for (i = 0; i < postIDs.length; i++) {
                cy.search('comments', 'postId', postIDs[m]).then((response) => {
                    emails.push(...response.body.map(function (item) { return item.email; }));
                });
                m++;

            }
            cy.writeFile('cypress/fixtures/emails.json', emails);
        });
    })
);