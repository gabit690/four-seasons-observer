const scrollableContainer = document.getElementById("scrollable-container");

const options = {
  root: scrollableContainer,
  rootMargin: "-25% 0px -75% 0px",
  threshold: 0,
};

let currentColorClass = null;

const observer = new IntersectionObserver((entries, observer) => {
  const activeEntry = entries.find((entry) => entry.isIntersecting);
  if (!activeEntry) return;

  if (currentColorClass) {
    document.body.classList.remove(currentColorClass);
  }
  currentColorClass = activeEntry.target.dataset.color;

  document.body.classList.add(currentColorClass);
}, options);

document
  .querySelectorAll("[data-color]")
  .forEach((element) => observer.observe(element));
