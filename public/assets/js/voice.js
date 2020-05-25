$(document).ready(() => {
  $("#ready").on("click", () => {
    $.get("/token", (data) => {
      console.log(data);
      Twilio.Device.setup(data);
      Twilio.Device.ready(function (device) {
        console.log("Twilio.Device Ready!");
        $("#logMsg").text("");
        $("#hangup").hide();
        $("#call").show();
        $(".modal").show();
      });

      Twilio.Device.error(function (error) {
        console.log("Twilio.Device Error: " + error.message);
        Twilio.Device.destroy();
        $(".modal").hide();
      });
      Twilio.Device.connect(function (conn) {
        console.log("Successfully established call!");
        $("#logMsg").text("Calling 5045154776......");
        $("#call").hide();
        $("#hangup").show();
      });

      Twilio.Device.disconnect(function (conn) {
        $("#logMsg").text("Call Ended");
        $(".modal").hide();
      });
    });
  });

  $("#call").on("click", () => {
    if (Twilio.Device.status() === "ready") {
      Twilio.Device.connect({ To: 5045154776 });
    } else {
      $("#logMsg").text(
        "Device is Inactive. Please close this window and reopen it"
      );
    }
  });

  $("#hangup").on("click", () => {
    console.log("hangup!!!");
    Twilio.Device.disconnectAll();
    Twilio.Device.destroy();
    $(".modal").hide();
  });

  $(".close").on("click", () => {
    Twilio.Device.destroy();
    $(".modal").hide();
  });
});
