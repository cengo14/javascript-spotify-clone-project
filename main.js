import { API } from "./js/api.js";
import { elements } from "./js/helpers.js";
import { renderPlayingInfo } from "./js/ui.js";

const api = new API();

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target[0].value;
  if (!query) {
    alert("Lütfen bir şarkı adı giriniz...");
    return;
  }
  api.searchMusic(query);
  elements.title.textContent = `${query} için sonuçlar`;
});
document.addEventListener("DOMContentLoaded", async () => {
  await api.topPopuler();
});

const audio = elements.audio;
const button = elements.button;
const playIcon = elements.playIcon;
button.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playIcon.classList.add("bi-pause-circle-fill");
    playIcon.classList.remove("bi-play-circle-fill");
  } else {
    audio.pause();
    playIcon.classList.add("bi-play-circle-fill");
    playIcon.classList.remove("bi-pause-circle-fill");
    stopAnimate();
  }
});
const playMusic = (url) => {
  elements.Audiosource.src = url;
  audio.load();
  audio.play();
  playIcon.classList.add("bi-pause-circle-fill");
  playIcon.classList.remove("bi-play-circle-fill");
};
const handleClick = (e) => {
  if (e.target.id === "play-btn") {
    const parent = e.target.closest(".card");
    renderPlayingInfo(parent.dataset);
    playMusic(parent.dataset.url);
    animatePhoto();
    elements.playing.style.display = "inherit";
  }
};
const animatePhoto = () => {
  const img = document.querySelector(".info img");
  img.className = "animate";
};
const stopAnimate = () => {
  const img = document.querySelector(".info img");
  img.classList.remove("animate");
};
document.addEventListener("click", handleClick);

elements.audio.addEventListener("play", animatePhoto);
elements.audio.addEventListener("pause", stopAnimate);
