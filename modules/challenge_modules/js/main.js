const input = document.querySelector("input");
const resultInput = document.getElementById("result");
document.getElementById("equal").addEventListener("click", calculate);

export function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

export const copyClipBoard = () => {
  document.getElementById("copyToClipboard").addEventListener("click", (e) => {
    const button = e.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });
};
