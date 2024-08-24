document.addEventListener('DOMContentLoaded', () => {
    // Automatically open the first FAQ on page load
    const firstItem = document.querySelector('.accordion-item');
    if (firstItem) {
      firstItem.classList.add('active');
    }
  });

  document.querySelectorAll('.faq-qs').forEach((item) => {
    item.addEventListener('click', (event) => {
      // Prevent the click event from propagating to the parent element
      event.stopPropagation();

      const accordionItem = item.parentElement;

      // Close all other accordions
      document
        .querySelectorAll('.accordion-item')
        .forEach((otherItem) => {
          if (otherItem !== accordionItem) {
            otherItem.classList.remove('active');
          }
        });

      // Toggle the clicked accordion
      accordionItem.classList.toggle('active');
    });
  });
