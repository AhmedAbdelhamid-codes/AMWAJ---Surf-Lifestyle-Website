let form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_428nefc",
    "template_hmjx8k1",
    this
  ).then(
    function () {
      alert("Message sent successfully!");
      form.reset();
    },
    function (error) {
      alert("Failed to send message");
      console.log(error);
    }
  );
});

