import { elements } from "./helpers.js";

export const renderSearchMusic = (songs) => {
  elements.list.innerHTML = "";
  songs.forEach((song) => {
    const div = document.createElement("div");

    div.dataset.url = song.hub.actions.pop().uri;
    div.dataset.title = song.title;
    div.dataset.img = song.images.coverart;
    div.className = "card";

    div.innerHTML = `<figure>
                        <img src="${song.images.coverart}"
                            alt="songcover">
                        <div class="play">
                            <i class="bi bi-play-fill" id="play-btn"></i>
                        </div>
                        <h4>${song.subtitle}</h4>
                        <p>${song.title}</p>
                    </figure>`;
    elements.list.appendChild(div);
  });
};
export const renderSongs = (song) => {
  elements.list.innerHTML = "";
  song.forEach((song) => {
    const div = document.createElement("div");

    div.dataset.url = song.preview_url;
    div.dataset.title = song.name;
    div.dataset.img = song.album.images[1].url;
    div.className = "card";

    div.innerHTML = `<figure>
                        <img src="${song.album.images[1].url}"
                            alt="songcover">
                        <div class="play">
                            <i class="bi bi-play-fill" id="play-btn"></i>
                        </div>
                        <h4>${song.album.artists[0].name}</h4>
                        <p>${song.name.slice(0, 15) + "..."}</p>
                    </figure>`;
    elements.list.appendChild(div);
  });
};

export const renderPlayingInfo = (song) => {
  elements.playingInfo.innerHTML = `
  <img src="${song.img}"
                alt="resim">
  <div>
    <p>Şuan oynatılıyor...</p>
    <h3>${song.title}</h3>
  </div>`;
};
