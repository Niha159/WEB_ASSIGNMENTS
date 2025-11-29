// Highlight nav link on click (works for any page)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});
// Resume page: Show More experience functionality
document.addEventListener('DOMContentLoaded', () => {
  const showMoreBtn = document.getElementById('show-more');
  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function () {
      document.querySelectorAll('.more-experience').forEach(e => e.style.display = 'block');
      showMoreBtn.style.display = 'none';
    });
  }
});
