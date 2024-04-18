"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/product:

const product = require('../controllers/product')
const permissions = require('../middlewares/permissions')

// URL: /products

router.route('/(:id)?')
    .post(permissions.isAdmin, product.create)
    .get(permissions.isStaff, product.read)
    .put(permissions.isAdmin, product.update)
    .patch(permissions.isAdmin, product.update)
    .delete(permissions.isAdmin, product.delete)

/* ------------------------------------------------------- */
module.exports = router