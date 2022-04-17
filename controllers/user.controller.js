const path = require('path')

const users = require('../models/user.model')

exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/index.html'))
}

exports.createUser = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const user = {
        name,
        email
    }
    users.push(user);
    res.status(201).json({
        success: true,
        users
    })
}