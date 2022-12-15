const form = document.querySelector("#join-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const logoutBtn = document.querySelector('#logout')

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //collect data from  inputs
  const data = {
    username: username.value,
    password: password.value,
  };
  LoginUser(data)
});

// if (localStorage.getItem("stamp")) {
//   window.location.href = "/home";
// }else{
//     window.location.href = "/login.html";
// }
