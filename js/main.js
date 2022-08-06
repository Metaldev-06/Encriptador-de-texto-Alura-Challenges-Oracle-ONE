const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const copiar = document.getElementById("copiar");

const textDefault = document.querySelector(".container-text-default");
const textResult = document.querySelector(".container-context-resultado");
const text = document.querySelector(".text-message-resultado");

encriptar.addEventListener("click", () => {
  let input = document.getElementById("inputEncriptar").value;

  const validacion = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(input);
  if (!validacion && input.length > 0) {
    const mapObj = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat",
    };
    input = input.replace(/e|i|a|o|u/gm, (matched) => {
      return mapObj[matched];
    });

    quitarAlerta();
    mostrarResultado();

    text.textContent = input;
  } else {
    mostrarAlerta();
  }
});

desencriptar.addEventListener("click", () => {
  let input = document.getElementById("inputEncriptar").value;

  const validacion = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(input);
  if (!validacion && input.length > 0) {
    const mapObj = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u",
    };
    input = input.replace(/enter|imes|ai|ober|ufat/gm, (matched) => {
      return mapObj[matched];
    });

    quitarAlerta();
    mostrarResultado();

    text.textContent = input;
  } else {
    mostrarAlerta();
  }
});

copiar.addEventListener("click", () => {
  let copiado = text.textContent;

  navigator.clipboard.writeText(copiado).then(() => {
    copiar.textContent = "Copiado ✅";
    copiar.classList.add("btn-copiado");

    window.setTimeout(() => {
      copiar.textContent = "Copiar";
      copiar.classList.remove("btn-copiado");
    }, 1000);
  });
});

const mostrarResultado = () => {
  textDefault.style.display = "none";
  textResult.style.display = "flex";
};
const quitarAlerta = () => {
  const alert = document.querySelector(".alert-disabled");
  const alertText = document.querySelector(".text-desencriptar");
  alertText.classList.remove("text-desencriptar-alert");
  alert.classList.remove("alert-actived");
};
const mostrarAlerta = () => {
  const alertText = document.querySelector(".text-desencriptar");
  const alert = document.querySelector(".alert-disabled");
  alert.classList.add("alert-actived");
  alertText.classList.add("text-desencriptar-alert");
};
