const {Router} = require('express');
const { auth } = require('../middleware');
const { createUser, findUser, updateUserEmail, listUsers, deleteUser, authUser } = require('./users.controllers');
const userRouter = Router();

userRouter.post('/users', createUser);
userRouter.get('/users', auth, authUser);
userRouter.post('/users/:username', findUser);
userRouter.delete('/users', deleteUser)
userRouter.put('/users', updateUserEmail)


module.exports = userRouter;