// Función para abrir el menú hamburguesa
function openMenu() {
    document.getElementById("fullScreenMenu").style.width = "100%";
}

// Función para cerrar el menú hamburguesa
function closeMenu() {
    document.getElementById("fullScreenMenu").style.width = "0";
}

// Cerrar el menú hamburguesa al hacer clic en cualquier enlace dentro del menú
document.querySelectorAll(".menu-content a").forEach(link => {
    link.addEventListener("click", function () {
        closeMenu(); // Cierra el menú cuando se hace clic en cualquier enlace
    });
});

// Función para cambiar las imágenes automáticamente
function changeImages() {
    const secImage = document.querySelector('a[href="secundario.html"] img');
    const priImage = document.querySelector('a[href="primario.html"] img');
    const jarImage = document.querySelector('a[href="jardin.html"] img');

    if (secImage) {
        secImage.src = secundariaImages[secIndex];
        secIndex = (secIndex + 1) % secundariaImages.length;
    }

    if (priImage) {
        priImage.src = primariaImages[priIndex];
        priIndex = (priIndex + 1) % primariaImages.length;
    }

    if (jarImage) {
        jarImage.src = jardinImages[jarIndex];
        jarIndex = (jarIndex + 1) % jardinImages.length;
    }
}

// Cambiar las imágenes cada 5 segundos
setInterval(changeImages, 5000);
