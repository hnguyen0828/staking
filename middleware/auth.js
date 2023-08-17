const db = require("../models");
const Validators = db.validators;

checkDuplicateEmail = async (req, res, next) => {
    // Username
    const validate = await Validators.findOne({
        where: {
            email: req.body.email
        }
    });
    if (validator) {
        res.status(400).send({
            message: "Failed! Username is already in use!"
        });
    }
};

requireLogin = (req, res, next) => {
    if (!res.locals.validator) {
        return res.redirect("/login");
    }

    next();
};


const auth = {
    checkDuplicateEmail, requireLogin
};

module.exports = auth;