const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "JwpU6MXlKnjFjiUXa";
const serviceID = "service_cdasjqq";
const templateID = "template_42y0ig9";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {
   e.preventDefault();

   submitBtn.innerText = "Just a moment...";

   const inputFields = {
      to_name: "Pride Heads",
      from_name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
   };

   emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      submitBtn.innerText = "Message Sent Successfully.";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }, (error) => {
      console.log(error);
      submitBtn.innerText = "Something went wrong";
    });
});

