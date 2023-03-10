// function registerDevs() {
//   const form = document.querySelector("form");
//   const button = document.querySelector(".add");
//   button.addEventListener("click", (e) => {
//     e.preventDefault();

//     const label = document.createElement("label");
//     const input = document.createElement("input");
//     const h3 = document.createElement("h3");
//     h3.textContent = "tempo de experiência";
//     const inputRadios = document.createElement("input");
//     inputRadios.type = "radio";

//     label.htmlFor = "tec";
//     label.textContent = `Nome da tecnologia`;
//     input.id = "tec";
//     input.type = "text";
//     input.name = "tec";
//     const div = document.createElement("div");
//     div.className = "content";

//     const button = document.createElement("button");
//     button.addEventListener("click", (e) => {
//       e.preventDefault();
//       const el = e.target;
//       div.remove();
//     });

//     button.id = "remove";
//     button.textContent = "Remover essa linha";
//     div.append(
//       h3,
//       inputRadios,
//       document.createElement("br"),
//       label,
//       input,
//       button,
//       document.createElement("br"),
//       document.createElement("br")
//     );
//     form.append(div);
//   });
// }
// registerDevs();
