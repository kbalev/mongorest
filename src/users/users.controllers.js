const User = require('./users.model');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        //save to db
        const savedUser = await user.save();
        res.status(200).send({
            user: savedUser,
            message: 'User created in database.'
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.listUsers = async (req, res) => {
    try {
        await User.find((err, users)=>{
            if(err) res.status(500).send(err);
            res.status(200).send(users)
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.findUser = async (req, res) => {
    try {
        const user = req.params.username
        const targetUser = await User.findOne({
            username: user
        })
        res.status(200).send({
            user: targetUser
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateUserEmail = async (req, res) => {
    try {
        const userInput = {
            user: req.body.user,
            pass: req.body.pass,
            new: req.body.new
        }
        await User.findOneAndUpdate({
            username: userInput.user,
            password: userInput.pass
        }, {
            email: userInput.new
        }, (err, user) => {
            if (err) res.status(500).send(err);
            res.status(200).send({
                user
            })
        })
    } catch (error) {
        res.status(500).send(error)

    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userInput = {
            user: req.body.user,
            pass: req.body.pass,
            confirmation: req.body.confirmation
        }
        if (userInput.confirmation == 'I am sure') {
            await User.findOneAndRemove({
                username: userInput.user,
                password: userInput.pass
            }, (err, user) => {
                if (err) res.status(500).send(err);
                res.status(200).send({
                    user,
                    message: 'user has been deleted'
                })
            })
        }
    } catch (error) {
        res.status(500).send(error)

    }
}