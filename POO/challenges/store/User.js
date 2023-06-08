class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (this.email === email && this.password === password) {
      return `login succeed`;
    } else {
      return `login failed`;
    }
  }
}

const gustavo = new User("Gustavo", "idk123@gmail.com", 123123);

console.log(gustavo);
console.log(gustavo.login("idk123@gmail.com", 123123));

console.log(gustavo);
console.log(gustavo.login("idk123@", 1233));
