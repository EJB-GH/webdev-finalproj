//Resume download
async function downloadResume() {
  const filename = "Evan_Resume_.pdf";
  const response = await fetch("Evan_Resume_.pdf");
  const blob = await response.blob();

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

//Contact form validation
const form = document.getElementById("contactForm");

if (form) {
  const emailInput = document.getElementById("contactEmail");
  const feedbackDiv = document.getElementById("formFeedback");

  function showFeedback(message, isError) {
    feedbackDiv.textContent = message;
    feedbackDiv.className = isError
      ? "alert alert-danger mt-3"
      : "alert alert-success mt-3";
    feedbackDiv.classList.remove("d-none");
  }

  //remove error tags for new inputs
  function clearFieldError(input) {
    input.classList.remove("is-invalid");
  }

  //regex the email for contains chars
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  //check email format
  function validateForm() {
    if (!validateEmail(emailInput.value.trim())) {
      emailInput.classList.add("is-invalid");
      return false;
    }
    return true;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailInput.classList.remove("is-invalid");
    feedbackDiv.classList.add("d-none");

    if (validateForm()) {
      showFeedback("Message sent.", false);
      form.reset();
    } else {
      showFeedback(
        "Please fill in all fields correctly before submitting.",
        true,
      );
    }
  });
}
