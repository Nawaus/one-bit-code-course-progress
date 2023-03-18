document.getElementById("sessionBtn").addEventListener("click", () => {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  document.querySelector("#sessionBtn").classList.add("name");
  input.value = "";
});

document.getElementById("readSession").addEventListener("click", () => {
  const info = sessionStorage.getItem("info");
  alert(`The info is "${info}"`);
});

document.getElementById("localBtn").addEventListener("click", () => {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
});

document.getElementById("readLocal").addEventListener("click", () => {
  const info = localStorage.getItem("text");
  alert(`Your local info is ${info}`);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2022, 9, 9) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});

document.getElementById();
