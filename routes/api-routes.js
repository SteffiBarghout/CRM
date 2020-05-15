// Dependencies
// =============================================================
var db = require("../models");
const bcrypt = require("bcrypt");
// var passport = require("passport");
module.exports = function (app, passport) {
  app.post("/login", (req, res) => {
    db.Users.findOne({
      where: { username: req.body.username },
    }).then(async (result) => {
      if (!result) {
        return res.send(false);
      }

      try {
        if (
          await bcrypt.compare(req.body.password, result.dataValues.password)
        ) {
          req.login(result.dataValues.username, function (err) {
            if (err) throw err;

            res.send(true);
          });
        } else {
          res.send(false);
        }
      } catch {
        res.status(500).end();
      }
    });
    passport.serializeUser(function (user_Name, done) {
      done(null, user_Name);
    });

    passport.deserializeUser(function (user_Name, done) {
      done(null, user_Name);
    });
  });

  app.get("/logout", function (req, res) {
    req.logout();
    req.session.destroy();
    res.render("login");
  });
};
