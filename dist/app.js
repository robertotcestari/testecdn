(() => {
  // src/app.ts
  var elemento = document.createElement("div");
  elemento.id = "newElement";
  elemento.textContent = "Ol\xE1 Tio Atila";
  elemento.style.backgroundColor = "tomato";
  var botao = document.createElement("button");
  botao.textContent = "me clique";
  botao.id = "clickme";
  botao.textContent = "Ol\xE1 Tio Atila";
  botao.style.backgroundColor = "white";
  var _a;
  (_a = document.querySelector("body")) == null ? void 0 : _a.append(botao);
  var _a2;
  (_a2 = document.getElementById("clickme")) == null ? void 0 : _a2.addEventListener("click", () => {
    var _a3;
    const appendedElement = document.getElementById("newElement");
    if (appendedElement) {
      appendedElement == null ? void 0 : appendedElement.remove();
    } else {
      (_a3 = document.querySelector("body")) == null ? void 0 : _a3.append(elemento);
    }
  });
})();
