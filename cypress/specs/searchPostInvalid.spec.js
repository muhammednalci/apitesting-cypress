describe('Search post with userId invalid cases', () => {
    
    it('Send the userId empty in url', () => {
        cy.search('posts', 'userId', '').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the userId as star in url', () => {
        cy.search('posts', 'userId', '*').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the userId as minus', () => {
        cy.search('posts', 'userId', -8).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the userId as string', () => {
        cy.search('posts', 'userId', 'hello').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send the userId as boolean', () => {
        cy.search('posts', 'userId', false).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body).to.have.length(0); // assertion of empty response body
        });
    });

    it('Send a different field', () => {
        cy.search('posts', 'hello', 'hello').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).be.below(500); //assertion for response time in ms
            expect(response.headers).to.include({ 'server': 'cloudflare' });
            expect(response.body.length).be.gt(0); // all users should come as response body
            expect(response.body[0]).to.have.property('title');
        });
    });
});
