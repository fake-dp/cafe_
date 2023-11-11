// 그냥 클릭하면 홈으로 갑니다.
document.addEventListener("DOMContentLoaded", function () {
  let signupButton = document.querySelector(".signup-btn");
  let signinButton = document.querySelector(".signin-btn");
  signupButton.addEventListener("click", function () {
    window.location.href = "./html/home.html";
  });
  signinButton.addEventListener("click", function () {
    window.location.href = "./html/home.html";
  });
});
