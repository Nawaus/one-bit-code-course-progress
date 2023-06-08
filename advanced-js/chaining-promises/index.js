function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age);
    } else {
      reject(new Error("Age is required"));
    }
  });
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear);
    } else {
      reject(new Error("Birthday is required"));
    }
  });
}

getAge("2009-09-02")
  .then((age) => {
    return checkAge(age);
  })
  .then((isOver18) => {
    if (isOver18) {
      console.log("Over Age");
    } else {
      console.log("Under age");
    }
  })
  .catch((err) => {
    err.message;
  });
