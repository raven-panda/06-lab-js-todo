const filters = document.querySelectorAll('.filter');

filters.forEach((filter) => {
    filter.addEventListener('click', (e) => {
        const clickedButton = e.target;

        clickedButton.classList.add('selected');
    
        filters.forEach((button) => {
            if (button != clickedButton) {
                button.classList.remove('selected');
            }
        })
    })
})