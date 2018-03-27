
var faker = require('faker');
var users = [];

for (i=0; i<10; i++) {
    var user = {
        name: faker.name.findName(),
        email: faker.internet.email()
    }
    users.push(user);
}

module.exports = users;