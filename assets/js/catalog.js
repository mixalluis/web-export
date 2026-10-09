// Catalog Filtering & Search
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('[data-category-filter]');
  const searchInput = document.getElementById('catalog-search');
  const productCards = document.querySelectorAll('[data-product-card]');
  const counterEl = document.getElementById('catalog-count');

  let activeCategory = 'all';
  let query = '';

  function filterItems() {
    let visible = 0;
    productCards.forEach(card => {
      const cardCat = card.getAttribute('data-product-category');
      const cardText = card.textContent.toLowerCase();

      const matchCat = activeCategory === 'all' || cardCat === activeCategory;
      const matchSearch = !query || cardText.includes(query);

      if (matchCat && matchSearch) {
        card.classList.remove('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (counterEl) {
      counterEl.textContent = visible;
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-white', 'text-slate-900', 'shadow-xs');
        b.classList.add('text-slate-600');
      });
      btn.classList.add('bg-white', 'text-slate-900', 'shadow-xs');
      btn.classList.remove('text-slate-600');

      activeCategory = btn.getAttribute('data-category-filter');
      filterItems();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      query = e.target.value.toLowerCase().trim();
      filterItems();
    });
  }
});
