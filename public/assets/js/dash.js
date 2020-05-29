$(document).ready(() => {
  $("#tester").click(function () {
    console.log($(this));
  });

  //   $(document).on("click", "#tester", function () {
  //     var test = $(this).parent().parent();
  //     console.log(test);
  //   });

  $.get("/allSpecialists", (result) => {
    console.log("All Specialists: ", result);
  });
});
