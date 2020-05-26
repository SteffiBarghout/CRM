$("#admin-form").on("submit", (event) => {
  event.preventDefault();
  var user = {
    firstName: $("#firstName").val().trim(),
    lastName: $("#lastName").val().trim(),
    email: $("#email").val().trim(),
    username: $("#username").val().trim(),
    password: $("#password").val().trim(),
  };
  $.post("/addUser", user).then((result) => {
    !result
      ? $("#admin_msg").text("Error: Try Again!!")
      : result === "User Already Exists!!"
      ? $("#admin_msg").text(result)
      : $("#admin_msg").text("User has been added");
  });
});
