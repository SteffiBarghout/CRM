$(document).ready(() => {
  $("#myImage").change((e) => {
    console.log("change has been triggerd");
    const files = e.target.files;
    const formData = new FormData();
    formData.append("myImage", files[0]);
    fetch("/upload", {
      method: "POST",
      body: formData,
    }).then((response) => {
      response.json().then((data) => {
        console.log(data.msg);
        $("#up_msg").text(data.msg);
        $("#updatePhoto").attr("src", data.img);
        $("#profileImage").attr("src", data.img);
      });
    });
  });

  $("#personal_form").on("submit", (event) => {
    event.preventDefault();
    $("#personal_msg").text("");
    var personalInfo = {
      firstName: $("#inputFirstName").val().trim(),
      lastName: $("#inputLastName").val().trim(),
      Email: $("#inputEmail4").val().trim(),
    };
    $.post("/update-personal", personalInfo, (response) => {
      response
        ? $("#personal_msg").text("Saved")
        : $("#personal_msg").text("Error: Try again!");
    });
  });
});
