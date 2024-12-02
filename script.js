
(function () {
    emailjs.init("ImM20PyOwGxTbR4iB");
  })();
  

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      console.log(this);
      emailjs.sendForm("service_b4ik7km", "template_el51bp6", this).then(
        function () {
          alert("Message Sent Successfully!");
        },
        function (error) {
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
    });
  