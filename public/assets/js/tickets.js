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