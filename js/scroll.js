
function fadeIn(element) {
    element.classList.add('fade-in');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = entry.target;
            if (target.classList.contains('animate-slide-up')) {
                target.classList.add('slide-up');
            } else {
                fadeIn(target);
            }
            observer.unobserve(target);
        }
    });
}, { threshold: 0.5 });


document.querySelectorAll('.animate').forEach((element) => {
    observer.observe(element);
});



document.addEventListener("DOMContentLoaded", function () {
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }

    // Scroll to the top when the button is clicked
    scrollTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});