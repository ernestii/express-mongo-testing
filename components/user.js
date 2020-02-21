const UserModel = require('../models/UserModel');
const router = require('express').Router();

const DEFAULT_USER_STATUS = 'pending';

const userController = {
    getUser: async (email) => {
        return await UserModel.findOne({ email }).exec();
    },
    createUser: async ({ email, name }) => {
        try {
            await UserModel.create({
                name,
                email,
                status: DEFAULT_USER_STATUS
            });
        } catch(e) {
            throw new Error(e);
        }
    }
};

router.get('/:id', userController.getUser);
router.post('/', userController.createUser);

module.exports.router = router;
module.exports.controller = userController;
