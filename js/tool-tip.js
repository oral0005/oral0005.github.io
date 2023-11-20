const shopLink = document.getElementById("shop-link");


const tooltip = document.createElement("span");
tooltip.className = "tooltip";
tooltip.innerHTML = "Click to shop now";


shopLink.appendChild(tooltip);


tooltip.style.opacity = 0;


shopLink.addEventListener("mouseover", function () {
    tooltip.style.opacity = 1;
});


shopLink.addEventListener("mouseout", function () {
    tooltip.style.opacity = 0;
});
