describe('Search comment with postId invalid cases', () => {
    
    it('Send the postId empty in url', () => {
        cy.search('comments', 'postId', '').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the postId as slash in url', () => {
        cy.search('comments', 'postId', '/').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the postId as minus', () => {
        cy.search('comments', 'postId', -8).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the postId as string', () => {
        cy.search('comments', 'postId', 'hello').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the postId as boolean', () => {
        cy.search('comments', 'postId', false).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send a different field', () => {
        cy.search('comments', 'hello', 'hello').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body.length).be.gt(0); // all users should come as response body
            expect(response.body[0]).to.have.property('email');
        });
    });
});
