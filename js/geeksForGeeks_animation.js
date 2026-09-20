document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ANIMATION EXISTANTE
    // =========================

    const myPara = document.getElementById('para');
    const processBar = document.getElementById('process_bar');

    function animatePara() {
        myPara.classList.toggle('animate');
        processBar.classList.toggle('processing_inner_animate');
    }

    setInterval(animatePara, 1000);


    // =========================
    // ANIMATIONS AU SCROLL
    // =========================

    const portfolioCards = Array.from(
        document.querySelectorAll("#portfolio .portfolioContent")
    );

    function getPortfolioColumns() {
        if (window.innerWidth <= 767) {
            return 1;
        }

        if (window.innerWidth <= 991) {
            return 2;
        }

        return 3;
    }

    function setPortfolioAnimationDirections() {
        const columns = getPortfolioColumns();

        portfolioCards.forEach(function (card, index) {
            const row = Math.floor(index / columns);
            const direction = row % 2 === 0 ? "left" : "right";

            card.classList.remove("portfolio-slide-left", "portfolio-slide-right");
            card.classList.add("portfolio-slide-" + direction);
        });
    }

    setPortfolioAnimationDirections();

    const elements = document.querySelectorAll(
        "#about .about, " +
        "#portfolio .portfolioContent, " +
        "#contact .contactContent"
    );

    window.addEventListener("resize", setPortfolioAnimationDirections);


    // =========================
    // OBSERVER
    // =========================

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    // Déclenche l'animation
                    entry.target.classList.add("scroll-animation");

                    // L'animation ne se rejoue pas
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.2
        }
    );


    // =========================
    // OBSERVER LES ÉLÉMENTS
    // =========================

    elements.forEach(function (element) {
        observer.observe(element);
    });

});