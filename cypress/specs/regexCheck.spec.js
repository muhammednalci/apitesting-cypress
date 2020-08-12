describe('Email RegEx Check', () => {
    it('Get all emails in comments that gave to all posts of specific user', () => {
        cy.search('users', 'username', 'Delphine').then((response) => {
            cy.search('posts', 'userId', response.body[0].id).then((response) => {
                var postIDs = response.body.map(function (item) { return item.id; });
                var m = 0;
                var n = 0;
                var i;
                for (i = 0; i < postIDs.length; i++) {

                    cy.search('comments', 'postId', postIDs[m]).then((response) => {
                        var emails = response.body.map(function (item) { return item.email; });
                        for (i = 0; i < emails.length; i++) {
                            assert.match(emails[n], /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

                            n++;
                        }
                        n = 0;
                    }
                    );

                    m++;

                }
            });
        });

    });
});
