$("#admin-form").on("submit", (event) => {
  event.preventDefault();
  var user = {
    username: $("#username").val().trim(),
    password: $("#password").val().trim(),
  };
  $.post("/addUser", user).then((result) => {
    if (!result) {
      return $("#err_msg").text("Error: Try Again!!");
    }
    $("#admin_msg").text("User has been added");
  });
});