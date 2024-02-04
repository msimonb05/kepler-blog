// back to top
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("back-to-top");

    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({top: 0, behavior: "smooth"});
    });
});