const {Router} = require('express');
const { createUser, findUser, updateUserEmail, listUsers, deleteUser } = require('./users.controllers');
const userRouter = Router();

userRouter.post('/users', createUser);
userRouter.get('/users', listUsers);
userRouter.get('/users/:username', findUser);
userRouter.delete('/users', deleteUser)
userRouter.put('/users', updateUserEmail)


module.exports = userRouter;