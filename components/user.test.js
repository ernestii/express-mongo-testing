const mongoose = require('mongoose');
const userController = require('./user').controller;
const UserModel = require('../models/UserModel');

const mongoOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const MOCK_USER = {
    name: 'Test Test',
    email: 'test@test.test'
};

const DEFAULT_USER_STATUS = 'pending';

describe('User Controller Test', () => {
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, mongoOptions, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });
    
    it('createUser() adds new user', async () => {
        await userController.createUser({
            name: MOCK_USER.name,
            email: MOCK_USER.email
        });

        const retrievedUser = await UserModel.findOne({ email: MOCK_USER.email }).exec();

        expect(retrievedUser.name).toBe(MOCK_USER.name);
        expect(retrievedUser.email).toBe(MOCK_USER.email);
        expect(retrievedUser.status).toBe(DEFAULT_USER_STATUS);
    });

    it('createUser() does not add duplicate users', async () => {
        await expect(userController.createUser({
            name: MOCK_USER.name,
            email: MOCK_USER.email
        }))
        .rejects
        .toThrow();
    });

    it('getUser() returns the correct user', async () => {
        const retrievedUser = await userController.getUser(MOCK_USER.email);

        expect(retrievedUser.name).toBe(MOCK_USER.name);
        expect(retrievedUser.email).toBe(MOCK_USER.email);
        expect(retrievedUser.status).toBe(DEFAULT_USER_STATUS);
    });
});
