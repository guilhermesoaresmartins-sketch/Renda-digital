const affiliateLink = "https://pay.kiwify.com.br/tVyV8yt?afid=AAWToeE3";

const affiliateButtons = document.querySelectorAll(
  'a[href="SEU-LINK-DE-AFILIADO"]'
);

affiliateButtons.forEach(button => {
  button.href = affiliateLink;
});


// Animação simples ao aparecer na tela

const elements = document.querySelectorAll(
  ".problem-card, .benefit-grid article, .step, .offer-box"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);

      }

    });
  },
  {
    threshold: 0.12
  }
);

elements.forEach(element => {
  element.classList.add("hidden");
  observer.observe(element);
});
