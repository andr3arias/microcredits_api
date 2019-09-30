let express = require("express")
let userCtr = require("../controllers/user.controller")

let userRouter = express.Router()

userRouter
    // Get all users
    .get('/', userCtr.getAllUsers)
    // Create an user
    .post('/create', userCtr.find, userCtr.createUser)
    // Drop an user
    .delete('/delete/:_id', userCtr.deleteUser)
    // update the user
    .put('/update/:_id', userCtr.updateUser)
    // TEST
    .put('/test/:_id/:atribbute/:value')


module.exports = userRouter