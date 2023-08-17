var express = require('express');
var router = express.Router();
const db = require("../models");
const Validators = db.validators;

/* GET users listing. */
router.get('/login', function(req, res, next) {
    res.render("login");
});

/** POST ==> User authentication */
router.post("/login", async (req, res, next) => {
    try {
        const validator = await Validators.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        });

        if (validator) {
            req.session.validatorId = validator.id;

            return res.redirect("/ok");
        } else {
            res.render("login", { error: "Invalid email or password" });
        }
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
