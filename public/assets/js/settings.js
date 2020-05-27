console.log("settings js loaded");
$("#saveBtn").on("click", (event) => {
    event.preventDefault();
    console.log("save button clicked");
    var user = {
        firstName: $("#settingfirstName").val().trim(),
        lastName: $("#settinglastName").val().trim(),
        email: $("#inputEmail4").val().trim()
    };
    console.log(user);
    $.ajax({
            url: "/updateSettings",
            data: user,
            method: "put"
        })
        .then((result) => {
            $("#setting_msg").text("Updated");
        })
        .catch((result) => {
            $("#setting_msg").text("Update failed");
        });
});