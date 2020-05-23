$(document).ready(function () {
  // $("#sidebarCollapse").on("click", function () {
  //   $("#sidebar").toggleClass("active");
  // });

  $("#sidebar").hover(function () {
    $("#sidebar").toggleClass("active");
  });

  // $("#dashBtn").click(function () {
  //   $("#contact").hide();
  //   $("#ticket").hide();
  //   $("#settings").hide();
  //   $("#home").show();
  // });

  // $("#contactBtn").click(function () {
  //   $("#home").hide();
  //   $("#ticket").hide();
  //   $("#settings").hide();
  //   $("#contact").show();
  // });

  // $("#ticketBtn").click(function () {
  //   $("#contact").hide();
  //   $("#home").hide();
  //   $("#settings").hide();
  //   $("#ticket").show();
  // });

  // $("#settingBtn").click(function () {
  //   $("#contact").hide();
  //   $("#ticket").hide();
  //   $("#home").hide();
  //   $("#settings").show();
  // });

  $(function () {
    $("#myTab li:first-child a").tab("show");
  });

  // settings tabs buttons and forms

  $("#updatePersonal").click(function () {
    $("#disabledPersonal").prop("disabled", false);
    $("#cancelBtn").show();
    $("#saveBtn").show();
  });

  $("#updateProfile").click(function () {
    $("#disabledProfile").prop("disabled", false);
    $("#cancelProfile").show();
    $("#saveProfile").show();
    $("#uploadImg").show();
  });

  $("#cancelBtn", "#saveBtn").click(function () {
    $("#disabledPersonal").prop("disabled", true);
    $("#cancelBtn").hide();
    $("#saveBtn").hide();
  });

  $("#cancelProfile", "#saveProfile").click(function () {
    $("#disabledProfile").prop("disabled", true);
    $("#cancelProfile").hide();
    $("#saveProfile").hide();
    $("#uploadImg").hide();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // end settings tabs buttons and forms

  // TICKET JS

  $(function () {
    $("#showall").click(function () {
      $(".targetDiv").show();
    });

    $(".showSingle").click(function () {
      $(".targetDiv").hide();
      $("#div" + $(this).attr("target")).show();
    });

    // === THE OPPOSITE OF WHAT I WANT
    $("#openTic").click(function () {
      $(".openTickets").hide();
    });
  });
});
