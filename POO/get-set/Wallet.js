class Wallet {
  #amount;
  #username;
  constructor() {
    this.#amount = 100.99 * 100;
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUserName) {
    if (typeof newUserName === "string") {
      return (this.#username = newUserName);
    } else {
      console.log("username must be type of string");
    }
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();
console.log(myWallet.amount);

console.log((myWallet.username = "Gustavo"));

myWallet.username += "Edson";
myWallet.username = true;
