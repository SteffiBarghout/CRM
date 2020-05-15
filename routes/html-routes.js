module.exports = function (
  app,
  isAuthenticatedMiddleware,
  isNotAuthenticatedMiddleware
) {
  app.get("/", isAuthenticatedMiddleware(), (req, res) => {
    console.log("///////CurrentUser: ", req.user);
    if (req.user.username === "admin") {
      console.log("returning admin......");
      res.render("admin");
    } else {
      res.render("dashboard", { currentUser: req.user.username });
    }
  });

  app.get("/login", isNotAuthenticatedMiddleware(), (req, res) => {
    res.render("login");
  });

  app.get("/settings", isAuthenticatedMiddleware(), (req, res) => {
    res.render("settings");
  });

  app.get("/logout", function (req, res) {
    req.logout();
    req.session.destroy();
    res.render("login");
  });
};
