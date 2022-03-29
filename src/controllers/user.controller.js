const Joi = require('joi');
const User = require('../../models/user.model');
const schema = require('../controllers/schemas/user.shcema');

async function newUser (req,res) {
        const body = req.body;
        console.log(body);
    try {
        Joi.assert(body, schema);
        const user = new User(body);
        await user.save();
        res.status(200).json({
            message: 'everything ok'
         });
    } catch (err) {
        const error = new Error();
        Object.assign(error, {
            code: 'bad request',
            message: err.message,
        })
        res.status(400).json(err);
    } 
}

async function getUsers (req, res) {
    const users = await User.find({})
    res.json(users);
}

module.exports = {newUser, getUsers};