//Home Page Js
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

/*SignUp Form Alert*/
function popUp() {
    swal("Created!", "Your Account has been Created Successfully!", "success", {
        button: "okay",
    });
}

