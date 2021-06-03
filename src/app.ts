

const elemento = document.createElement("div");
elemento.id = "newElement";
elemento.textContent = "Olá Tio Atila";
elemento.style.backgroundColor = "tomato";


const botao = document.createElement("button");
botao.textContent = "me clique";
botao.id = "clickme";
botao.textContent = "Olá Tio Atila";
botao.style.backgroundColor = "white";

document.querySelector("body")?.append(botao);


document.getElementById("clickme")?.addEventListener("click", () => {
  const appendedElement = document.getElementById("newElement");

  if (appendedElement) {
    appendedElement?.remove();
  } else {
    document.querySelector("body")?.append(elemento);
  }
});
