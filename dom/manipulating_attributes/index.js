const input = document.getElementById("input");
document.getElementById("value").addEventListener("click", () => {
  input.value = input.value === "" ? "Olá, mundo" : "";
  console.log(input.value);
  console.log(input.getAttribute("value"));
});

document.getElementById("type").addEventListener("click", () => {
  //   input.type = input.type !== "date" ? "date" : "text";
  input.setAttribute("type", "date");
});

document.getElementById("placeholder").addEventListener("click", () => {
  input.placeholder = "Digite algo...";
});

document.getElementById("disable").addEventListener("click", () => {
  input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", () => {
  const data = input.dataset.something;
  console.log("O valor do atributo data-something é " + data);
  input.dataset.something = "Algum outro valor";
  console.log(
    "O valor do adtributo data-something agora é" + input.dataset.something
  );
});
