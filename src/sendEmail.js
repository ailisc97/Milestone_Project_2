function sendMail(contactForm) {
    emailjs.send("service_dmqixxl", "template_kc5b6ij", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "score": contactForm.score.value
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
  
