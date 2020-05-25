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
        if (this.username != "") {
            return sequelize.models.Users.findAndCountAll({
                where: {
                    username: this.username
                }

            }).then((result) => {
                if (result.rows != "") {
                    return $("#err_msg").text("User already exists!");
                }
                $("#admin_msg").text("User already exists");
            })
        } else if (!result) {
            return $("#err_msg").text("Error: Try Again!!");
        }
        $("#admin_msg").text("User has been added");
    });
});