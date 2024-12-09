const botaoDownload = document.getElementById("btnDownload");

botaoDownload.addEventListener("click", () => {
  const link = document.createElement("a");
  link.target = "_blank";
  link.href = "/src/assets/curriculo/Ederlei_Pereira_dos_Santos_Silva.pdf";
  link.download = "Ederlei_Pereira_dos_Santos_Silva.pdf";
  link.click();
});