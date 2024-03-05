const ingreoTexto = document.getElementById("ingreoTexto");
const mensajeFinal = document.getElementById("mensajeFinal");
const btnIncriptar = document.getElementById("btnIncriptar");
const btnDesincriptar = document.getElementById("btnDesincriptar");
const btnCopiar = document.getElementById("btnCopiar");
const mensajeInicial = document.getElementById("mensajeInicial");
const muneco = document.getElementById("muneco");
const right = document.getElementById("right");

let remplazar = [
  ["e", "enter"],
  ["o", "ober"],
  ["i", "imes"],
  ["a", "ai"],
  ["u", "ufat"],
];

const remplace = (nuevoValor) => {
  mensajeFinal.innerHTML = nuevoValor;

  muneco.classList.add("oculto");
  ingreoTexto.value = "";
  mensajeInicial.style.display = "none";
  btnCopiar.style.display = "block";
  right.classList.add("ajustar");
  mensajeFinal.classList.add("ajustar");
};

const reset = () => {
  mensajeFinal.innerHTML = "";
  muneco.classList.remove("oculto");
  mensajeInicial.style.display = "block";
  btnCopiar.style.display = "none";
  right.classList.remove("ajustar");
  mensajeFinal.classList.remove("ajustar");
  ingreoTexto.focus();
};

btnIncriptar.addEventListener("click", () => {
  const texto = ingreoTexto.value.toLowerCase();

  if (texto != "") {
    function incriptar(newText) {
      for (let i = 0; i < remplazar.length; i++) {
        if (newText.includes(remplazar[i][0])) {
          newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
        }
      }
      return newText;
    }
  } else {
    alert("Ingrese texto que desea incriptar");
    reset();
  }
  //const textoIncriptado = incriptar(texto);
  remplace(incriptar(texto));
});

btnDesincriptar.addEventListener("click", () => {
  const texto = ingreoTexto.value.toLowerCase();

  if (texto != "") {
    function desincriptar(newText) {
      for (let i = 0; i < remplazar.length; i++) {
        if (newText.includes(remplazar[i][1])) {
          newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
        }
      }
      return newText;
    }
  } else {
    alert("Ingrese texto que desea desincriptar");
    reset();
  }

  remplace(desincriptar(texto));
});

btnCopiar.addEventListener("click", () => {
  let texto = mensajeFinal;
  texto.select();
  document.execCommand("copy");
  alert("Texto Copiado");
  reset();
});
