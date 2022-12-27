//const cypress = require("cypress");
//const { get } = require("cypress/types/lodash");
//const { describe } = require("mocha");

describe('Create a user', () => {
    let user = {};
    const USER_ID = 771012;
    const USER_NAME = 'kliogs';

    it('Create', () => {
        cy.request({
            method:'POST',
            url: 'https://petstore.swagger.io/v2/user',
            'body':{
                 "id": USER_ID,
                 "username": USER_NAME,
                 "firstName": "123456",
                 "lastName": "string",
                 "email": "string",
                 "password": "string",
                 "phone": "string",
                 "userStatus": 0
        }
    }).then(({body, status}) => {
        cy.log(JSON.stringify(body));
        cy.log(status);
     expect(status).to.eq(200);
    });
});
it('Put', () => {
    cy.request({
        method:'PUT',
        url: 'https://petstore.swagger.io/v2/user/USER_NAME',
        'body':{
        "id": 771012,
  "username": "kleogs",
  "firstName": "12345",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "555555",
  "userStatus": 0
}
}).then(({body, status}) => {
    cy.log(JSON.stringify(body));
    expect(status).to.eq(200);
});
});
it('Delete', () => {
    cy.request({
        method:'DELETE',
        url: 'https://petstore.swagger.io/v2/user/USER_NAME'
}).then(({status}) => {
    cy.log(status);
    expect(status).to.eq(200);
});

});
});
