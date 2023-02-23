function addInput() {
  const ul = document.getElementById("inputs");

  const newLi = document.createElement("li");
  newLi.className = "list-item";
  newLi.innerText = "Novo input";

  const newInput = document.createElement("input");
  newInput.name = "input";
  newInput.type = "text";

  newLi.appendChild(newInput);
  ul.append(newLi);
  newLi.style.color = "aqua";
}
