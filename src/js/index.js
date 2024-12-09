const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

const botaoDownload = document.getElementById("btnDownload");

botaoMostrarProjetos.addEventListener("click", () => {
  mostrarMaisProjetos();

  esconderBotao();

});

function esconderBotao() {
  botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
  projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add("ativo");
  });
}

botaoDownload.addEventListener("click", () => {
  const link = document.createElement("a");
  link.target = "_blank";
  link.href = "/src/assets/curriculo/Ederlei_Pereira_dos_Santos_Silva.pdf";
  link.download = "Ederlei_Pereira_dos_Santos_Silva.pdf";
  link.click();
});