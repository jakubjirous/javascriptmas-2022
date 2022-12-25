/**
 * Christmas Jukebox
 *
 * Add code inside of the playSong(id) function to make the YouTube Player play the new YouTube song.
 *
 * Stretch Goals:
 * - add your favorite songs
 * - change style of button of currently playing song
 * - hide the YouTube player, so you just hear the music
 *
 * My solution:
 * https://scrimba.com/scrim/co52c43c788925d20c5d3d163
 */

const player = document.querySelector("#player");

const buttons = document.querySelectorAll(".button");

const playSong = (id) => {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
};

const setActive = (el) => {
  el.classList.add("active");
};

const removeActive = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const onClick = (el) => {
  removeActive();
  setActive(el);
  playSong(el.dataset.id);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => onClick(btn));
});
