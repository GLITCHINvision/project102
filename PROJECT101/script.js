document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('demoModal');
  const openBtns = [document.getElementById('scheduleBtn'), document.getElementById('heroDemoBtn')];
  const closeBtn = document.querySelector('.modal-content .close');
  const form = document.getElementById('demoForm');
  const msg = document.getElementById('formMsg');

  openBtns.forEach(btn => btn.addEventListener('click', () => {
    msg.textContent = '';
    modal.style.display = 'flex';
  }));

  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    msg.style.color = '#007700';
    msg.textContent = 'Thank you—your demo is scheduled!';
    form.reset();
  });


flatpickr("#demo-calendar", {
  inline: true,
  defaultDate: "today",
  minDate: "today",
  dateFormat: "F j, Y"
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
    });
  });

  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

});
