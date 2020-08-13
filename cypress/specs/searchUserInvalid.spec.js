
describe('Search user with username invalid cases', () => {
    
    it('Send the user empty in url', () => {
        cy.search('users', 'username', '').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the user as question mark in url', () => {
        cy.search('users', 'username', '?').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the user as non existing in DB', () => {
        cy.search('users', 'username', 'xxxxxxxxx').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the user as integer', () => {
        cy.search('users', 'username', 3).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the user as boolean', () => {
        cy.search('users', 'username', false).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send a different field', () => {
        cy.search('users', 'hello', 'hello').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body.length).be.gt(0); // all users should come as response body
            expect(response.body[0]).to.have.property('username');
        });
    });

    it('Send a non existing url', () => {
        cy.search('nonexisting', 'username', 'Delphine').then((response) => {
            expect(response.status).to.equal(404);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
        });
    });
});
