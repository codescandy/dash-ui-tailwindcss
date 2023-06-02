var closeAlertButtons = document.querySelectorAll(".closealertbutton");

closeAlertButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        var parentElement = this.parentElement.parentElement;
        parentElement.style.display = "none";

        console.log(parentElement);
    });
});