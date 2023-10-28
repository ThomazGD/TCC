
    var btn = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    // Rolar suavemente para o topo quando o botão é clicado
    btn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });