var db = require("../models");

module.exports = function (
  app,
  isAuthenticatedMiddleware,
  isNotAuthenticatedMiddleware
) {
  app.get("/", isAuthenticatedMiddleware(), (req, res) => {
    console.log("///////CurrentUser: ", req.user);

    db.Users.findOne({
      where: { id: req.user.id },
    }).then(async (result) => {
      console.log("//////uploads", result.dataValues.profImg);
      if (req.user.username === "admin") {
        console.log("returning admin......");
        res.render("admin");
      } else {
        res.render("dashboard", {
          currentUser: req.user.username,
          img: result.dataValues.profImg,
        });
      }
    });
  });

  app.get("/login", isNotAuthenticatedMiddleware(), (req, res) => {
    res.render("login");
  });

  app.get("/tickets", isAuthenticatedMiddleware(), (req, res) => {
    res.render("tickets");
  });

  app.get("/settings", isAuthenticatedMiddleware(), (req, res) => {
    db.Users.findOne({
      where: { id: req.user.id },
    }).then(async (result) => {
      res.render("settings", {
        img: result.dataValues.profImg,
        currentUser: req.user.username,
      });
    });
  });

  app.get("/ticket", isAuthenticatedMiddleware(), (req, res) => {
    db.Users.findOne({
      where: { id: req.user.id },
    }).then(async (result) => {
      console.log("//////uploads", result.dataValues.profImg);
      res.render("ticket", {
        img: result.dataValues.profImg,
        currentUser: req.user.username,
      });
    });
  });

  app.get("/logout", function (req, res) {
    req.logout();
    req.session.destroy();
    res.render("login");
  });
};
