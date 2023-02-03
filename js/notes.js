const init = () => {
  const getAdvice = async () =>
    await fetch(`https://api.adviceslip.com/advice`, { cache: "reload" }).then(
      (res) => res.json()
    );

  const updateAdvice = async () => {
    const result = await getAdvice();
    updateAdviceText(result.slip.id, result.slip.advice);
  };

  const updateAdviceText = (id, advice) => {
    document.querySelector("span").textContent = id;
    document.querySelector(".main-text p").textContent = `"${advice}"`;
  };

  const diceButton = document.querySelector(".dice-button button");
  diceButton.addEventListener("click", () => {
    try {
      (async () => await updateAdvice())();
    } catch (error) {
      console.log(error);
      console.log("Sorry, something went wrong with the request");
    }
  });

  // Update advice at first draw.
  updateAdvice();
};
init();

let markW = 78;
let markT = 1.69;

let johnT = 1.95;
let johnW = 92;

const johnBmi = johnW / johnT ** 2;
const markBmi = markW / markT ** 2;
let markHigherBMI = markBmi > johnBmi;

const Coala = (88 + 91 + 110) / 3;

const Golfinho = (96 + 108 + 89) / 3;

if (Golfinho > Coala) {
  console.log("Golfinho vencedor");
} else if (Coala > Golfinho) {
  console.log("Coala vencedor");
} else {
  console.log("Empate");
}
