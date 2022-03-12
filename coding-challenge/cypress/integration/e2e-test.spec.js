describe('My First Test', () => {

    const _appUrl = "http://localhost:4200/";
    const _baseUrl = "http://jsonplaceholder.typicode.com/";
    const __user = "users";
    const __albums = "albums";

    const selectedUserId = 2;
    const selectedAlbumId = 3

    // beforeEach(() => {
    //     cy.visit(_appUrl);
    // });

    it('Visits Dashboard', () => {
        cy.visit(_appUrl);
        /**
         * Dashboard
         */
        cy.contains('Dashboard');
        cy.contains('get List');
        cy.get('.btn').should((val) => {

            expect(val).to.have.length(2);

            expect(val.first()).class('active');

            expect(val.last()).not.to.have.class('active');

        });
        cy.url().should('include', '/dashboard');
////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * User List
         */
        cy.contains('get List').click();
        cy.request(_baseUrl + __user).should((response) => {

            expect(response).property('status').to.equal(200);
            
            expect(response).property('body').to.have.property('length').to.be.at.least(1);

        });
        cy.url().should('include', '/list');

        cy.get('app-user-list').within(() => {

            cy.get('app-user-tile').should((tile) => {
                expect(tile.length).to.be.at.least(1);
            });

            cy.get('app-paginator ngb-pagination ul li').should((page) => {
                expect(page.length).to.be.greaterThan(2);
            });

        });
////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * Albums List
         */
        cy.get('app-user-list .btn').eq(selectedUserId).click();

        cy.request(_baseUrl + __albums).should((response) => {

            expect(response).property('status').to.equal(200);

            expect(response).property('body').to.have.property('length').to.be.at.least(1);

        });

        let userId = selectedUserId + 1;

        let albumUrl = 'detail/' + userId + '/albums';

        cy.url().should('include', albumUrl);

        cy.get('app-user-details .btn').eq(selectedAlbumId).click();

        cy.get('app-list .btn-secondary').click();

        cy.url().should('include', albumUrl);
////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * create new album
         */
        const newAlbumName = "My new workplace";

        const smallText = "test";

        cy.get('app-user-details .btn-info').click();

        cy.url().should('include', "/new-album");

        cy.get('app-new-album form').within(() => {

            cy.get('.btn-primary').should('be.disabled');

            cy.get('input').type(smallText);

            cy.get('.btn-primary').should('be.disabled');

            cy.get('input').clear();

            cy.get('input').type(newAlbumName);

            cy.get('.btn-primary').should('not.disabled');

            cy.get('.btn-primary').click();

        });

        cy.request('POST', _baseUrl + __albums, {
            // id: to.be.a('number'),
            title: newAlbumName,
            userId: selectedUserId
        }).then((response) => {
            expect(response).property('status').to.equal(201);
            expect(response).property('body').to.contain({
                title: newAlbumName,
                userId: selectedUserId
            });
        });
////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * Checking Album name in the list
         */
        cy.url().should('include', albumUrl);

        cy.get('app-user-details .btn .card-body .card-title').first().should((album) => {

            expect(album.text()).equal(newAlbumName);

            album.click();

        });

        cy.url().should('include', '/photos');
        
        cy.get('app-list').within(() => {
            cy.get('.card').should((photo) => {
                expect(photo.length).to.be.greaterThan(1);

            })
        });

////////////////////////////////////////////////////////////////////////////////////////////////////////

        cy.get('app-list .btn-secondary').click();

        cy.url().should('include', albumUrl);

        cy.get('app-user-details .btn-secondary').click();

        cy.url().should('include', '/list');

        cy.get('app-user-list .btn-secondary').click();

        cy.url().should('include', '/dashboard');

    });

});