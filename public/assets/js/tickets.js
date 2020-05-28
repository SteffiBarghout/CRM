$(document).ready(() => {
  $("#myTab li:last-child a").tab("show");
  $(".big_ticket").hide();

  $("#ticket-form").on("submit", (event) => {
    event.preventDefault();
    var ticket = {
      ticketText: $("#ticketTitle").val().trim(),
      ticketText: $("#ticketText").val().trim(),
    };
    $.post("/addtickets", user).then((result) => {
      if (!result) {
        return $("#err_msg").text("Error: Try Again!!");
      }
      $("#ticket_msg").text("Ticket has been added");
    });
  });

  $.get("/allTickets", (result) => {
    console.log(result);
    $(".smallT_cont").text("");
    var cardCounter = 0;
    for (row of result) {
      var customerFirst = row.Customer.firstName;
      var customerLast = row.Customer.lastName;
      var ticketTitle = row.ticketTitle;
      //   var ticketText = row.ticketText;
      var BigticketText =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
      var SmallticketText;
      if (BigticketText.split(" ").length > 20) {
        //   display only 20 words in the samll ticket card
        SmallticketText =
          BigticketText.split(" ").slice(0, 20).join(" ") + "....";
      } else {
        SmallticketText = BigticketText;
      }

      var ticketStatus = row.status;

      $(".smallT_cont").append(
        '<div class="col"><div class="card small_ticket" id ="' +
          cardCounter +
          '" ><h3>Date opened</h3><div class="card-body"><h5>' +
          customerFirst +
          " " +
          customerLast +
          "</h5><h3>" +
          ticketTitle +
          "(" +
          ticketStatus +
          ")" +
          "</h3><p>" +
          SmallticketText +
          '</p><p class="bigTicketText" style="display:none">' +
          BigticketText +
          '</div></div></div><div class="w-100"></div>'
      );
      cardCounter++;
    }
  });

  console.log("big card content: ", $(".big_ticket").html());
  $(document).on("click", ".small_ticket", function () {
    var ticketDate = $(this).children("h3")[0].innerHTML;
    var CustomerName = $(this).children(".card-body").children("h5")[0]
      .innerHTML;
    var ticketTitle = $(this).children(".card-body").children("h3")[0]
      .innerHTML;
    var ticketText = $(this)
      .children(".card-body")
      .children(".bigTicketText")[0].innerHTML;
    $(".big_ticket").children("h3").text(ticketDate);
    $(".big_ticket").children(".card-body").children("h5").text(CustomerName);
    $(".big_ticket").children(".card-body").children("h3").text(ticketTitle);
    $(".big_ticket").children(".card-body").children("p").text(ticketText);
    $(".big_ticket").show();
  });
});
