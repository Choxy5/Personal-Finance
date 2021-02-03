/* SCROLL REVEAL */
const sr = ScrollReveal({
  reset: true,
  distance: "30px",
  duration: 1800,
});

sr.reveal(
  `.navbar,
.title, .card, 
.card__benefits,
.title__customers, .customers__img,
.contact__info, .btn-contact,
.footer__flex, .footer__logo, .footer__content__icons, .footer__end`,
  {
    origin: "top",
    interval: 200,
  }
);

sr.reveal(
  `.hero__title,
  .customers__say__left, .customers__quote__left,
  .mobile__img
`,
  {
    origin: "left",
    interval: 200,
  }
);

sr.reveal(
  `.hero__img,
  .customers__say__right, .customers__quote__right,
  .app__data
`,
  {
    origin: "right",
    interval: 200,
  }
);
