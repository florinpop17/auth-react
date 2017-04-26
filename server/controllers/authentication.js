const User = require('../models/user');

exports.signup = function(req, res, next) {
    const { email, password } = req.body;

    // See if a user with the given email exists
    User.findOne({ email }, function(err, existingUser){
        if(err) { return next(err); }

        // If a user with email does exist, return an error
        if(existingUser) {
            return res.status(422).send({ error: 'Email is in use' }); // 422 => unprocesable
        }

        // If a user with email does NOT exist, create and save user record
        const user = new User({
            email, password
        });

        // Save to database
        user.save(function(err) {
            if(err) { return next(err); }

            // Respond to request indicating the user was created
            res.json({ success: true });
        });
    });
}
