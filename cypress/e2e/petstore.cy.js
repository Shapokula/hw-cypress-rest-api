import users from '../fixtures/users.json'

describe('swagger petstore', () => {
  it('create user', () => {
    cy.createUser(users.user1)
      .then((response) => {
        expect(response.status).be.eql(200);

        cy.getUser(users.user1.username, true)
          .then((response) => {
            expect(response.status).be.eql(200);
            expect(response.body).be.eqls(users.user1);
          })
      })
    })


  it('update user', () => {
    cy.createUser(users.user2)
      .then((response) => {
        expect(response.status).be.eql(200);

        cy.request('PUT', `/user/${users.user2.username}`, users.user3)
          .then((response) => {
            expect(response.status).be.eql(200);
            cy.getUser(users.user3.username, true)
            .then((response) => {
              expect(response.status).be.eql(200);
              expect(response.body).be.eqls(users.user3);
            })
          })
      })
    })

  it('delete user', () => {
    cy.createUser(users.user4)
      .then((response) => {
        expect(response.status).be.eql(200);

        cy.request('DELETE', `/user/${users.user4.username}`)
          .then((response) => {
            expect(response.status).be.eql(200);
            cy.getUser(users.user4.username, false)
            .then((response) => {
              expect(response.status).be.eql(404);
            })
          })
      })
  })
})