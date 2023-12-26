// for error or success message

//i have used oneClick method
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

//try to change backround hero with JS
let value = 1080;

if (window.innerWidth < 500) {
  document.querySelector("#imgHero").src =
    "./assets/images/illustration-sign-up-mobile.svg";
} else if (window.innerWidth >= 800) {
  document.querySelector("#imgHero").src =
    "./assets/images/illustration-sign-up-desktop.svg";
} else {
  console.log(window.innerWidth);
}
