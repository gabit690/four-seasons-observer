import { seasonAudios } from "./audios-manager.js";

const scrollableContainer = document.getElementById("scrollable-container");

const options = {
  root: scrollableContainer,
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((element) => {
    const imageClass = element.target.dataset.image;
    const season = element.target.dataset.season;
    const audio = seasonAudios[season];
    if (element.isIntersecting) {
      document.body.classList.add(imageClass);
      audio.play();
    } else {
      document.body.classList.remove(imageClass);
      audio.pause();
      audio.currentTime = 0;
    }
  });
}, options);

document
  .querySelectorAll("[data-image]")
  .forEach((element) => observer.observe(element));
