module.exports = function (app) {
  app.get("/", isAuthenticatedMiddleware(), (req, res) => {
    console.log("///////CurrentUser: ", req.user);
    if (req.user === "admin") {
      console.log("returning admin......");
      res.render("admin");
    } else {
      res.render("dashboard", { currentUser: req.user });
    }
  });

  app.get("/login", isNotAuthenticatedMiddleware(), (req, res) => {
    res.render("login");
  });
};

function isAuthenticatedMiddleware() {
  return (req, res, next) => {
    console.log(
      `req.session.passport.user: ${JSON.stringify(req.session.passport)}`
    );

    if (req.isAuthenticated()) return next();
    res.redirect("/login");
  };
}

function isNotAuthenticatedMiddleware() {
  return (req, res, next) => {
    console.log(
      `req.session.passport.user: ${JSON.stringify(req.session.passport)}`
    );

    if (!req.isAuthenticated()) return next();
    res.redirect("/");
  };
}
