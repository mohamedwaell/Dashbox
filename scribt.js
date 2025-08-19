function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function slideCards(direction) {
    const slider = document.getElementById("productSlider");
    const card = slider.querySelector(".product-card");
    const scrollAmount = card.offsetWidth + 30;
    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  function toggleMenu() {
    const nav = document.getElementById('mobileNav');
    nav.classList.toggle('show');
  }
   function submitForm(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const governorate = document.getElementById('governorate').value;
      const address = document.getElementById('address').value;
      const type = document.getElementById('type').value;
      const weight = document.getElementById('weight').value;

      alert(`✅ تم إرسال الطلب بنجاح!\n\nالاسم: ${name}\nالموبايل: ${phone}\nالمحافظة: ${governorate}\nالعنوان: ${address}\nنوع الشحنة: ${type}\nالوزن: ${weight} كجم`);

      document.getElementById('shipmentForm').reset();
    }
   const video = document.getElementById('preloadVideo');
const preloader = document.getElementById('preloader');
const mainContent = document.getElementById('mainContent');

video.addEventListener('ended', () => {
  preloader.style.display = 'none';
  mainContent.style.display = 'block';
  document.body.style.overflow = 'auto'; // Enable scroll if needed
});
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        el.classList.add('in-view');
      } else {
        el.classList.remove('in-view'); 
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  const counters = document.querySelectorAll('.counter');

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / 100);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

window.addEventListener('scroll', function () {
  const section = document.querySelector('.stats-section');
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    animateCounters();
  }
});

