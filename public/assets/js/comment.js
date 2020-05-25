$("#comment-form").on("submit", (event) => {
    event.preventDefault();
    var comment = {
        commentText: $("#commentText").val().trim()
    };
    $.post("/addComment", user).then((result) => {
        if (!result) {
            return $("#err_msg").text("Error: Try Again!!");
        }
        $("#comment_msg").text("Comment Added");
    });
});