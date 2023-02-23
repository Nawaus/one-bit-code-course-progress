function addContact() {
  const contactSection = document.getElementById("contacts-list");
  const h3 = document.createElement("h3");
  h3.textContent = "Contato";
  contactSection.append(h3);
  const ul = document.createElement("ul");

  const nameInput = document.createElement("input");
  const nameLabel = document.createElement("label");
  nameLabel.innerHTML = `<label for="name">Nome: <label>`;
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";
  ul.append(nameLabel, nameInput, document.createElement("br"));
  contactSection.append(ul);

  const inputNumber = document.createElement("input");
  const numberLabel = document.createElement("label");
  numberLabel.innerHTML = `<label for="">Telefone: <label>`;
  inputNumber.type = "number";
  inputNumber.name = "number";
  inputNumber.id = "number";
  ul.append(numberLabel, inputNumber, document.createElement("br"));
  contactSection.append(ul);

  const inputAddress = document.createElement("input");
  const addresLabel = document.createElement("label");
  addresLabel.innerHTML = `<label for="address">Endereço: <label>`;
  inputAddress.type = "text";
  inputAddress.name = "addres";
  inputAddress.id = "number";
  ul.append(addresLabel, inputAddress, document.createElement("br"));
  contactSection.append(ul);
}

function removeContact() {
  const contactSection = document.getElementById("contacts-list");

  const titles = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  contactSection.removeChild(titles[titles.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
}
