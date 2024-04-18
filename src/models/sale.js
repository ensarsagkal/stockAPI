"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Sale Model:

const SaleSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        default: 1
    },

    amount: {
        type: Number,
        set: function () { return this.price * this.quantity },
        default: function () { return this.price * this.quantity },
        transform: function () { return this.price * this.quantity },
    },


}, {
    collection: 'Sales',
    timestamps: true
})

/* ------------------------------------------------------- */
// https://mongoosejs.com/docs/middleware.html

// pre('init') -> Ekrana veriyi vermeden önce veriyi (çıktıyı) manipule edebiliriz:
// middleware değil, next gerek yok:
SaleSchema.pre('init', function (document) {
    // console.log(document)
    document.extraField = 'Cohort 15'
    document.__v = undefined
    // toLocaleDateString:
    // https://www.w3schools.com/jsref/jsref_tolocalestring.asp
    document.createdAtStr = document.createdAt.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle: 'medium' })
    document.updatedAtStr = document.updatedAt.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle: 'medium' })
    // document.createdAt = undefined
    // document.updatedAt = undefined
})

/* ------------------------------------------------------- */
module.exports = mongoose.model('Sale', SaleSchema)