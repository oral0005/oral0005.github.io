function animateText() {
    const textElements = document.querySelectorAll(".animated-text");

    textElements.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = "";

        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                element.textContent += text[i];
            }, 55 * i);
        }
    });
}

animateText();
