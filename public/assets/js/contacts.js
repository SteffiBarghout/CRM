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
        `
        <tr>
        <th scope="row"> ${rowCount} </th>
          <td class="customerFirstName userFirstName"> ${row.firstName} </td>
          <td class="customerLastName userLastName"> ${row.lastName} </td>
          <td class="customerEmail"> ${row.email} </td>
          <td class="customerPhone"> ${row.phone.replace(
            /(\d{3})(\d{3})(\d{4})/,
            "$1-$2-$3"
          )} </td>
          <td>${row.address} </td>
          <td class="userFirstName">${row.city} </td>
          <td>${row.state} </td>
          <td>${row.zipCode} </td>
          <td> <a class="btn btn-primary moreBtn" data-toggle="collapse" href="#${rowCount}" role="button" aria-expanded="false" aria-controls="collapseExample">
          <i class="fas fa-ellipsis-v"></i>
        </a> </td>

          </tr>

          <tr>
          <td colspan="11"><div class="collapse" id="${rowCount}">
          <div class="card card-body">

      <div class="container">
          <div class="row justify-content-md-center">
          <div class="col-4 align-self-center"> <button href="" class="customerBtn activate btn btn-outline-info" data-toggle="modal"
                  data-target="#exampleModalCenter" id="ready">
                  <i class="fas fa-phone"></i> Call Customer 
              </button></div>
          <div class="col-4 align-self-center">
      
              <button class="btn btn-info" data-toggle="modal" data-target=".bd-example-modal-lg"
                  data-whatever="{{currentUser}}" href="">
                  <i class="far fa-plus-square"></i> Create Ticket
              </button>
          </div>
          <div class="col-4 align-self-center"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#callModal"> <i class="fas fa-pencil-alt"></i> Make a Note</button>
          </div>
    
      </div>
      </div
          </div>
        </div></td></tr>

          
  `
      );
      rowCount++;
    }
  });

  $(document).on("click", ".moreBtn", function () {
    var phoneNum = $(this)
      .parent()
      .parent()
      .children(".customerPhone")[0]
      .innerHTML.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, "$1-$2-$3");
    $("#call").text("Call" + phoneNum);

    var customerEmail = $(this).parent().parent().children(".customerEmail")[0]
      .innerHTML;
    $("#customerEmail").text(customerEmail);

    var customerFirstName = $(this)
      .parent()
      .parent()
      .children(".customerFirstName")[0].innerHTML;

    console.log(customerFirstName.trim().charAt(0));
    console.log(typeof customerFirstName);

    var customerLastName = $(this)
      .parent()
      .parent()
      .children(".customerLastName")[0].innerHTML;

    $("#customerName").text(customerFirstName + " " + customerLastName);

    $(".avatar").text(
      customerFirstName.trim().charAt(0) +
        " " +
        customerLastName.trim().charAt(0)
    );
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
