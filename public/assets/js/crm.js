$(function () {
  // Sidebar toggle behavior
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
  });

  $("#dashBtn").click(function () {
    $("#contact").hide();
    $("#ticket").hide();
    $("#settings").hide();
    $("#home").show();
  });

  $("#contactBtn").click(function () {
    $("#home").hide();
    $("#ticket").hide();
    $("#settings").hide();
    $("#contact").show();
  });

  $("#ticketBtn").click(function () {
    $("#contact").hide();
    $("#home").hide();
    $("#settings").hide();
    $("#ticket").show();
  });

  $("#settingBtn").click(function () {
    $("#contact").hide();
    $("#ticket").hide();
    $("#home").hide();
    $("#settings").show();
  });
});
