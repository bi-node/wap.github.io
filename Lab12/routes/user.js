
const express = require('express');
const path = require('path')

const router = express.Router();
let users = [
    { "email": "user1@example.com", "password": "123", "username": "user1" },
    { "email": "user2@example.com", "password": "123", "username": "user2" },
    { "email": "user3@example.com", "password": "123", "username": "user3" },
]


router.get('', (req, res, next) => {
    res.sendFile((path.join(__dirname, '..', 'views', 'users.html')));
})
router.post('',express.urlencoded({ extended: true }), (req, res, next) => {
    console.log(req.body);
    users.push(req.body);
    console.log("Users Added to the list");
    console.log(users);
    res.sendFile((path.join(__dirname, '..', 'views', 'users.html')));
})

module.exports = router;
