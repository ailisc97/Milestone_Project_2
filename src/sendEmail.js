function sendMail(contactForm) {
    console.log("full_name: ", contactForm.full_name.value);
    console.log("the_email: ", contactForm.the_email.value);
    console.log("score: ", contactForm.score.value);
    emailjs.send("service_dmqixxl", "template_kc5b6ij", {
        "from_name": contactForm.full_name.value,
        "from_email": contactForm.the_email.value,
        "score": contactForm.score.value
    })
    .then(
        function(response) {
            // send message to front end success - possible a success
            console.log("SUCCESS", response);
        },
        function(error) {
            // send message to front end failure - due to hamsters
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}