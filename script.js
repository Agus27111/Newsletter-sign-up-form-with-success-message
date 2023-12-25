// for error or success message

//we used oneClick method
function subscribe() {
  const emailValue = document.getElementById("email");
  const errorElement = document.querySelector(".textvalidity");
  const card1 = document.querySelector(".SubscribeCard");
  const card2 = document.querySelector(".succesCard");
  if (!emailValue.checkValidity() || emailValue.value === "") {
    errorElement.innerHTML = "Valid email required";
    emailValue.classList.add("error");
  } else {
    //flip card
    card1.classList.add("hidden");
    card2.classList.remove("hidden");
  }
}
