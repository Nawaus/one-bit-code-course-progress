let person = {
  name: "Gustavo",
  age: 17,
  ola: {
    street: "n sei",
  },
  walking() {
    console.log(`${this.name} is walking`);
  },
};

person.walking();
