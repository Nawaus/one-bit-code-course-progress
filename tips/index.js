(() => {
  const firstInputValue = document.getElementById("firstInput").value;
  const secondInputValue = document.getElementById("secondInput").value;

  document.querySelector(".event").addEventListener("click", () => {
    document.querySelector("div").textContent =
      Number(firstInputValue) + Number(secondInputValue);
  });
})();

// // (() => {      })();
// IIFE to prevent global variable leakage.
