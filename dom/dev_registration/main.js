function createLabel(html, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.textContent = html;
  return label;
}

function createInput(id, value, name, type = "text", placeHolder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeHolder;
  return input;
}

const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("devForm");
const developers = [];
let inputRows = 0;

addTechBtn.addEventListener("click", (ev) => {
  const stackInputs = document.getElementById("stackInputs");

  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Nome:", "techName-" + rowIndex);
  const techNameInput = createInput("techName-" + rowIndex, null, "techName");

  const exLabel = createLabel("Experiência: ");
  const id1 = "expRadio-" + rowIndex + ".1";
  const exRadio1 = createInput(id1, "0-2 anos", "techExp-" + rowIndex, "radio");
  const exLabel1 = createLabel("0-2 anos", id1);

  const id2 = "expRadio-" + rowIndex + ".2";
  const exRadio2 = createInput(id2, "3-4 anos", "techExp-" + rowIndex, "radio");
  const exLabel2 = createLabel("3-4 anos", id2);

  const id3 = "expRadio-" + rowIndex + ".3";
  const exRadio3 = createInput(id3, "5+ anos", "techExp" + rowIndex, "radio");
  const exLabel3 = createLabel("5+ anos", id3);

  const removeRowBtn = document.createElement("button");
  removeRowBtn.type = "button";
  removeRowBtn.textContent = "Remover";
  removeRowBtn.addEventListener("click", () => {
    stackInputs.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    exLabel,
    exRadio1,
    exLabel1,
    exRadio2,
    exLabel2,
    exRadio3,
    exLabel3,
    removeRowBtn
  );

  stackInputs.appendChild(newRow);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullNameInput = document.getElementById("FullName");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach((row) => {
    //
    const techName = document.querySelector(
      "#" + row.id + " input[name='techName']"
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + " input[type='radio']:checked"
    ).value;
    technologies.push({ name: techName, exp: techExp });
  });

  const newDev = { fullname: fullNameInput.value, technologies: technologies };
  developers.push(newDev);

  fullNameInput.value = "";
  inputRows.forEach((row) => {
    row.remove();
  });

  console.log(developers);

  alert("Dev cadastrado com sucesso!");
});
