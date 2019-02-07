$(document).ready(function () {

    const init = () => {
        $('#saveModal').modal();
        $('#modalMessage').modal();
    };


    $('.searchArticle').on("click", () => {
        fetch("/api/scrape", {
            method: "GET"
        }).then(() => window.location.replace("/api/scrape"));
    });

    init();
});