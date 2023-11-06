const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
 $("#name").text(profile.getName());
 $("#email").text(profile.getEmail());
 $("#image").attr('src', profile.getImageUrl());
 $(".data").css("display","block");
 $(".fab fa-google").css("display", "none");
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    alert("You Have Been Sign Out Successfully");
    $(".fab fa-google").css("display", "block");
    $(".data").css("display","none");
  });
}