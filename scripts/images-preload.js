const seasonImages = [
  "./images/autumn.webp",
  "./images/winter.webp",
  "./images/spring.webp",
  "./images/summer.webp",
];

seasonImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});
