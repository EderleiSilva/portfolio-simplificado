const certificados = document.querySelectorAll(".certificado");
const tituloCertificado = document.querySelectorAll(".tituloCertificado");

certificados.forEach(certificado => {
    certificado.addEventListener('click', () => {
        const classZoomExiste = document.querySelector(".zoom");

        if (certificado.classList.contains("zoom")) {
            certificado.classList.remove("zoom");
        } else {
            certificado.classList.add("zoom");
        }

        if (classZoomExiste) {
            classZoomExiste.classList.remove("zoom");
        }
    });
});

certificados.forEach(certificado => {
    certificado.addEventListener('click', () => {
        tituloCertificado.forEach(titulo => {
            if (certificado.classList.contains("zoom")) {
                titulo.classList.add("disable");
            } else {
                titulo.classList.remove("disable");
            }
        });
    });
})