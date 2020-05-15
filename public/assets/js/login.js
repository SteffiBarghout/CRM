$("#login-form").on("submit", (event) => {
  event.preventDefault();
  var user = {
    username: $("#username").val().trim(),
    password: $("#password").val().trim(),
  };
  $.post("/login", user).then((result) => {
    if (!result) {
      return $("#err_msg").text("Invalid Username or Password");
    }
    window.location.href = "/";
  });
});
