function step02() {
  console.log(`step 02`);
}

console.log("step 01");
step02();
console.log("Step 03");

console.log("Step 04");
setTimeout(() => {
  console.log("Step 05");
});
console.log("Step 06");
