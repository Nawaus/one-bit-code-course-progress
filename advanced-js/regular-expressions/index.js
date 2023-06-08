function PhoneNumber(phoneNumberString) {
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");

  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
  return fixedString;
}

console.log(new PhoneNumber("+55 (22) 9 9876-5432"));
console.log(new PhoneNumber("+1 (555) a555-999-88882"));
