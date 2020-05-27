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

  $("#NewCus_btn").on("click", () => {
    var NewCustomer = {
      firstName: $("#CusFirstName").val().trim(),
      lastName: $("#CusLastName").val().trim(),
      address: $("#CusAddress").val().trim(),
      city: $("#CusCity").val().trim(),
      state: $("#CusState").val().trim(),
      zipCode: $("#CusZip").val().trim(),
      phone: $("#CusPhone").val().trim(),
      email: $("#CusEmail").val().trim(),
    };
    $.post("/newCustomer", NewCustomer, (result) => {
      !result
        ? $("#newCusMsg").text("Customer Already Exists!!")
        : result === "Missing Info!"
        ? $("#newCusMsg").text(result)
        : $("#newCusMsg").text("Customer Added!!");
      // we made it so that the email is the unique thing for each customer.
    });
  });

  $(".close_NewCus").on("click", () => {
    location.reload();
  });
});
