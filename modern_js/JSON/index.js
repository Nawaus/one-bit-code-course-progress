const string = `{
    "name": "Isaac Pontes",
    "job": "Fullstack Developer",
    "technologies": ["HTML", "CSS", "Javascript", "SQL"],
    "working": true,
    "yearsOfExperience": 7,
    "website": null
  }`;

const obj = JSON.parse(string);

const toString = JSON.stringify(obj);
