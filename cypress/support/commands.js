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
