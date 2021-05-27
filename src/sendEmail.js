function sendMail(resultForm) {
    emailjs.send("service_dmqixxl", "template_kc5b6ij", {
        "from_name": resultForm.name.value,
        "from_email": resultForm.emailaddress.value,
        "score": resultForm.score.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}