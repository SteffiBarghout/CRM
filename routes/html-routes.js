module.exports = function (
  app,
  isAuthenticatedMiddleware,
  isNotAuthenticatedMiddleware
) {
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
