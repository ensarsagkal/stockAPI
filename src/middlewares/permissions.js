"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Middleware: permissions

module.exports = {

    isLogin: (req, res, next) => {

        // Set Passive:
        return next()

        // any User:
        if (req.user && req.user.is_active) {

            next()

        } else {

            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
        }
    },

    isAdmin: (req, res, next) => {

        // Set Passive:
        return next()
        
        // only Admin:
        if (req.user && req.user.is_active && req.user.is_superadmin) {

            next()

        } else {

            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login and to be Admin.')
        }
    },

    isStaff: (req, res, next) => {

        // Set Passive:
        return next()
        
        // only Admin or Staff:
        if (req.user && req.user.is_active && (req.user.is_superadmin || req.user.is_staff)) {

            next()

        } else {

            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login and to be Staff.')
        }
    },
}