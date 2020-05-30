$(document).ready(() => {
  $("#myTab li:last-child a").tab("show");
  $(".big_ticket").hide();
  //   var onLoadWidth = (2 / 3) * $(".clculate").width();
  //   $(".big_ticket_sec").width(onLoadWidth);
  //   var NewWidth = 0.108 * onLoadWidth;
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
    for (row of result) {
      var TicketId = row.id;
      var customerFirst = row.Customer.firstName;
      customerFirst = customerFirst[0].toUpperCase() + customerFirst.slice(1);
      var customerLast = row.Customer.lastName;
      customerLast = customerLast[0].toUpperCase() + customerLast.slice(1);
      var Initial = customerFirst[0] + customerLast[0];
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
      var OpacityVal;
      ticketStatus === "open" ? (OpacityVal = 1) : (OpacityVal = 0.6);
      $(".smallT_cont").append(
        '<div class="col"><div style="opacity:' +
          OpacityVal +
          '" class="card small_ticket" id="' +
          TicketId +
          '"  ticketStat="' +
          ticketStatus +
          '"><h5 style="padding:1.25rem"><div class="float-right ticketDate">Date opened</div></h5><div class="card-body"><a href="#" class="activate"><div class="avatar" style="background-color: rgb(220, 42, 42);">' +
          Initial +
          "</div></a><h2 style='display:inline-block'>" +
          customerFirst +
          " " +
          customerLast +
          '</h2 style="display:inline-block"><h4>' +
          ticketTitle +
          "(" +
          ticketStatus +
          ")" +
          '</h4><p class="smallTicketText">' +
          SmallticketText +
          '</p><p class="bigTicketText" style="display:none">' +
          BigticketText +
          '</p></div></div></div><div class="w-100"></div>'
      );
    }
    lastCardID = $(".smallT_cont").children().last().prev().children(".card")[0]
      .attributes.id.nodeValue;
  });

  $(document).on("click", ".small_ticket", function () {
    console.log("disFromTop: ", $(this).parent().offset().top);
    var ID = $(this)[0].id;
    var status = $(this).attr("ticketStat");
    $(".big_ticket")
      .children(".card-body")
      .children("button")[0].attributes.ticketid.nodeValue = ID;
    var Initial = $(this)
      .children(".card-body")
      .children("a")
      .children("div")[0].innerHTML;
    var ticketDate = $(this).children("h5").children("div")[0].innerHTML;
    console.log("ticketDate", ticketDate);
    var CustomerName = $(this).children(".card-body").children("h2")[0]
      .innerHTML;
    var ticketTitle = $(this).children(".card-body").children("h4")[0]
      .innerHTML;
    var ticketText = $(this)
      .children(".card-body")
      .children(".bigTicketText")[0].innerHTML;
    $("#recepient").text(CustomerName);
    $(".big_ticket").children("h5").children("div").text(ticketDate);
    $(".big_ticket")
      .children(".card-body")
      .children("a")
      .children("div")
      .text(Initial);
    $(".big_ticket").children(".card-body").children("h2").text(CustomerName);
    $(".big_ticket").children(".card-body").children("h4").text(ticketTitle);
    $(".big_ticket").children(".card-body").children("p").text(ticketText);

    if (status === "closed") {
      $(".big_ticket").css("opacity", "0.6");
      $("#close_ticket").hide();
      $("#reply").attr("disabled", "disabled");
    } else {
      $(".big_ticket").css("opacity", "1");
      $("#reply").removeAttr("disabled", "disabled");
      $("#close_ticket").show();
    }
    $("#ticket_closeMsg").text("");
    if (ID === lastCardID) {
      var smallWidth = $(`#${lastCardID}`).height();
      console.log("small Width: ", smallWidth);
      var bigWidth = $(".big_ticket").height();
      console.log("big Width: ", bigWidth);
      var widthDefference = bigWidth - smallWidth;

      $(".big_ticket").css({
        top: $(this).parent().position().top - widthDefference,
      });
    } else {
      $(".big_ticket").css({ top: $(this).parent().position().top });
    }
    $(".big_ticket").show();
  });

  $("#reply").on("click", function () {
    var TicketID = $(this)[0].attributes.ticketid.nodeValue;
    $("#ticketTextArea > textarea").attr("ticketid", TicketID);
    $("#ticketTextArea > textarea").val("");
    $(".ticket_closeMsg").text("");
    $(".reply-form").modal("show");
  });

  $("#PostComment").on("click", () => {
    var Comment = $("#ticketTextArea > textarea").val().trim();
    console.log("Comment :", Comment);
    var TicketID = $("#ticketTextArea > textarea").attr("ticketid");
    if (Comment === "") {
      return $("#commMSG").text("No Comments !");
    }
    var NewComment = { commentText: Comment, TicketId: TicketID };
    $.post("/addNote", NewComment, (result) => {
      result
        ? $("#commMSG").text("submitted")
        : $("#commMSG").text("Error: try again!");
    });
  });

  $("#NewTicket").on("click", () => {
    var CustomerEmail = $("#recipient-name").val().trim();
    var ticketTitle = $("#ticket-title").val().trim();
    var ticketText = $("#ticket-text").val().trim();

    if (CustomerEmail !== "" && ticketTitle !== "" && ticketText !== "") {
      var NewTicekt = {
        CustomerEmail: CustomerEmail,
        ticketTitle: ticketTitle,
        ticketText: ticketText,
      };
      $.post("/Newticket", NewTicekt, (result) => {
        result
          ? $("#ticketmsg").text("Submitted")
          : $("#ticketmsg").text("Error: try again!!");
      });
    } else {
      $("#ticketmsg").text("Please fill out all the required fields!!");
    }
  });

  $("#create_ticket").on("click", () => {
    $("#recipient-name").val("");
    $("#ticket-title").val("");
    $("#ticket-text").val("");
    $("#ticketmsg").text("");
    $(".Ticket_form").modal("show");
  });

  $(".close_ticket").on("click", () => {
    $(".Ticket_form").modal("hide");
    location.reload();
  });

  $("#close_ticket").on("click", function () {
    // var TicketID = $(this).parent().children("#reply")[0].attributes.ticketid
    //   .nodeValue;
    TicketID = $(this).prev().attr("ticketid");
    $.post("/closeTicket", { id: TicketID }, (result) => {
      if (result) {
        $("#ticket_closeMsg").text("Ticket has been closed");
        setTimeout(() => {
          location.reload();
        }, 1500);
      } else {
        $("#ticket_closeMsg").text("Error: try Again!");
      }
    });
  });

  $("#openTickets-tab").on("click", function () {
    $(".big_ticket").hide();
    $(".smallT_cont").children(".col").children(".small_ticket").show();
    $(".smallT_cont")
      .children(".col")
      .children("div[ticketstat='closed']")
      .hide();

    lastCardID = $(".smallT_cont")
      .children(".col")
      .children("div[ticketstat='open']")
      .last()
      .attr("id");
    console.log("lastIDOpen: ", lastCardID);
  });

  $("#allTickets-tab").on("click", function () {
    $(".big_ticket").hide();
    $(".smallT_cont").children(".col").children(".small_ticket").show();
    lastCardID = $(".smallT_cont")
      .children(".col")
      .children(".small_ticket")
      .last()
      .attr("id");
    console.log("lastIDAll: ", lastCardID);
  });

  $("#closedTickets-tab").on("click", function () {
    $(".big_ticket").hide();
    $(".smallT_cont").children(".col").children(".small_ticket").show();
    $(".smallT_cont")
      .children(".col")
      .children("div[ticketstat='open']")
      .hide();
    lastCardID = $(".smallT_cont")
      .children(".col")
      .children("div[ticketstat='closed']")
      .last()
      .attr("id");
    console.log("lastIDClose: ", lastCardID);
  });
});
