const scrollableContainer = document.getElementById("scrollable-container");

const options = {
  root: scrollableContainer,
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((element) => {
    const imageClass = element.target.dataset.image;
    if (element.isIntersecting) {
      document.body.classList.add(imageClass);
    } else {
      document.body.classList.remove(imageClass);
    }
  });
}, options);

document
  .querySelectorAll("[data-image]")
  .forEach((element) => observer.observe(element));
