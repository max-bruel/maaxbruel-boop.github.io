const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('#projects-grid .project-card')];

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle('active', item === button));
    cards.forEach((card) => {
      const tags = (card.dataset.category || '').split(' ');
      const show = filter === 'all' || tags.includes(filter);
      card.classList.toggle('hidden', !show);
      card.setAttribute('aria-hidden', String(!show));
    });
  });
});
