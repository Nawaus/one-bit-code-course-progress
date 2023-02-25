// function addPlayer() {
//   document.addEventListener("click", (e) => {
//     const el = e.target;
//     if (el.classList.contains("button")) {
//       const result = confirm("Deseja adicionar esse jogador?");
//       if (result) {
//         const section = document.querySelector("section");
//         const inputs = document.querySelectorAll("input");
//         const h2 = document.createElement("h2");
//         h2.textContent = `Jogador`;
//         const div = document.createElement("div");
//         div.className = "content";
//         div.innerHTML = `
//       <p class="name-player">Nome do jogador: ${inputs[0].value}</p>
//       <p class="player-position">Posição do jogador: ${inputs[1].value}</p>
//       <p class="number-shirt">Número da camisa: ${inputs[2].value}</p>
//       `;
//         section.append(h2, div);

//         inputs[0].value = "";
//         inputs[1].value = "";
//         inputs[2].value = "";
//       }
//     }
//   });
// }

// addPlayer();

// function removePlayer() {
//   document.addEventListener("click", (e) => {
//     const el = e.target;
//     if (el.classList.contains("remove")) {
//       const result = document.querySelector(".get-player").value;
//       console.log(result);
//       const div = document.querySelectorall(".content");
//       console.log(div[2]);
//       if (div.textContent === result) {
//         console.log("ola");
//       }
//     }
//   });
// }

// removePlayer();
