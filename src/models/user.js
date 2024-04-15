"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "username": "admin",
    "password": "aA*123456",
    "email": "admin@site.com",
    "firstName": "admin",
    "lastName": "admin",
    "isActive": true,
    "isStaff": true,
    "isAdmin": true
}
{
    "username": "staff",
    "password": "aA*123456",
    "email": "staff@site.com",
    "firstName": "staff",
    "lastName": "staff",
    "isActive": true,
    "isStaff": true,
    "isAdmin": false
}
{
    "username": "test",
    "password": "aA*123456",
    "email": "test@site.com",
    "firstName": "test",
    "lastName": "test",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false
}
/* ------------------------------------------------------- */
// User Model:

const passwordEncrypt = require('../helpers/passwordEncrypt')

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password),
        // selected:false 
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Email field must be required'],
        unique: [true, 'There is this email. Email field must be unique'],
        // validate: [
        //     (email) => email.includes('@') && email.includes('.'),
        //     'Email type is not correct.'
        // ]
        // email regex /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        // regexr.com for test
        validate: [
            // (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email),
            // 'Email type is not correct.'
            (email) => { 
                const regexEmailCheck=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                return regexEmailCheck.test(email)                
            },
            'Email type is not correct.'
            
        ]
    },

    firstName: String,

    lastName: String,

    isActive: {
        type: Boolean,
        default: true,
    },

    isStaff: {
        type: Boolean,
        default: false,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

}, { collection: 'users', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('User', UserSchema)