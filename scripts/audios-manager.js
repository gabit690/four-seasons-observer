export const seasonAudios = {
  autumn: new Audio("./audios/autumn.mp3"),
  winter: new Audio("./audios/winter.mp3"),
  spring: new Audio("./audios/spring.mp3"),
  summer: new Audio("./audios/summer.mp3"),
};

Object.values(seasonAudios).forEach((audio) => {
  audio.preload = "auto";
});

export function playSeasonAudio(season) {
  const audio = seasonAudios[season];

  if (!audio) {
    return;
  }

  audio.play();
}

export function stopSeasonAudio(season) {
  const audio = seasonAudios[season];

  if (!audio) {
    return;
  }

  audio.pause();
  audio.currentTime = 0;
}
