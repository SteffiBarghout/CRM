$(function () {
  $("#myTab li:last-child a").tab("show");

  $.get("/allSpecialists", (result) => {
    console.log("All Specialists: ", result);
    $("#Specialists").text(result);
  });

  $.get("/allCustomers", (result) => {
    console.log("All Customers: ", result);
    $("#Customers").text(result);
  });
});
