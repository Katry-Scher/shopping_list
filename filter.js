document.querySelectorAll('.list li').forEach(filterItem => {
    filterItem.addEventListener('click', () => {
        const category = filterItem.getAttribute('data-category');
        filterItemsByCategory(category);
    });
});

function filterItemsByCategory(category) {
    const items = document.querySelectorAll('.list_items li');
    items.forEach(item => {
        if (item.getAttribute('data-category') === category || category === 'all') {
            item.style.display = 'block'; // Exibe os itens que correspondem à categoria
        } else {
            item.style.display = 'none'; // Oculta os itens que não correspondem
        }
    });
}






