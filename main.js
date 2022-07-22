//import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const faker = require('@faker-js/faker/locale/es');
const fs = require('fs');

const USERS = {
    Users: []
};

function createTodosFakerUser() {
    const numberRandomTodos = Math.trunc(Math.random() * (30 - 1) + 1)
    let todoUser = []
    Array.from({ length: numberRandomTodos }).forEach(() => {

        const todo = {
            todoId: faker.faker.datatype.uuid(),
            todo: faker.faker.lorem.words()
        }
        todoUser.push(todo)
    })
    return todoUser
}


function createRandomUser() {
    return {
        userId: faker.faker.datatype.uuid(),
        username: faker.faker.internet.userName(),
        email: faker.faker.internet.email(),
        avatar: faker.faker.image.avatar(),
        password: faker.faker.internet.password(),
        birthdate: faker.faker.date.birthdate(),
        registeredAt: faker.faker.date.past(),
        todos: createTodosFakerUser()
    };
}

Array.from({ length: 100 }).forEach(() => {
    USERS.Users.push(createRandomUser());
});

//let UsersObj = JSON.parse(USERS);
let UserJson = JSON.stringify(USERS);
fs.writeFile("db.json", UserJson, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

    console.log("JSON file has been saved.");
});