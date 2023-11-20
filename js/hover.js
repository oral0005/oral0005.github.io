
const buyButton = document.querySelector('.btn.btn-primary');

buyButton.addEventListener('mouseover', () => {
    // Add your hover effect code here
    buyButton.style.backgroundColor = 'white';
    buyButton.style.color = 'black';
});


buyButton.addEventListener('mouseout', () => {
    // Reset the button's style
    buyButton.style.backgroundColor = '';
    buyButton.style.color = '';
});
