$(function () {
  $("#myTab li:last-child a").tab("show");

  $.get("/allSpecialists", (result) => {
    console.log("All Specialists: ", result);
    $("#Specialists_table").text("");
    var rowCount = 1;
    for (row of result) {
      $("#Specialists_table").append(
        '<tr><th scope="row">' +
          rowCount +
          "</th><td>" +
          row.firstName +
          "</td><td>" +
          row.lastName +
          "</td><td>" +
          row.email +
          "</td></tr>"
      );
      rowCount++;
    }
  });

  $.get("/allCustomers", (result) => {
    console.log("All Customers: ", result);
    $("#Customers_table").text("");
    var rowCount = 1;
    for (row of result) {
      $("#Customers_table").append(
        '<tr><th scope="row">' +
          rowCount +
          "</th><td>" +
          row.firstName +
          "</td><td>" +
          row.lastName +
          "</td><td>" +
          row.email +
          "</td><td>" +
          row.phone +
          "</td><td>" +
          row.address +
          "</td><td>" +
          row.city +
          "</td><td>" +
          row.state +
          "</td><td>" +
          row.zipCode +
          "</td></tr>"
      );
      rowCount++;
    }
  });
});
