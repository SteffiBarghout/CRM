$(document).ready(() => {
  //   $(document).on("click", "#tester", function () {
  //     var test = $(this).parent().parent();
  //     console.log(test);
  //   });
  $.get("/allSpecialists", (result) => {
    var firstName = result[0].firstName;
    var lastName = result[0].lastName;
    // console.log($(this.result));
    $("#userFirstName").text("");
    $("#userFirstName").append(`
    ${firstName}
        `);
    $("#userLastName").text("");
    $("#userLastName").append(`
    ${lastName}
        `);
  });
});
