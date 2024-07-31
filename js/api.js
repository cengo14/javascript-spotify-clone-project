import { renderSearchMusic, renderSongs } from "./ui.js";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "ea669ca93bmsh43ae66e51841c73p116cedjsn4eea6e398e5a",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};
const optionsTab = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "ea669ca93bmsh43ae66e51841c73p116cedjsn4eea6e398e5a",
    "x-rapidapi-host": "spotify23.p.rapidapi.com",
  },
};

export class API {
  constructor() {
    this.songs = [];
  }
  async searchMusic(query) {
    try {
      const res = await fetch(
        `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr-TR&limit=5`,
        options
      );
      const data = await res.json();
      let newData = data.tracks.hits;
      newData = newData.map((song) => ({ ...song.track }));
      this.songs = newData;
      renderSearchMusic(this.songs);
    } catch {
      console.log(error);
    }
  }
  async topPopuler() {
    const url =
      "https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry";
    try {
      const res = await fetch(url, optionsTab);
      const result = await res.json();
      this.songs = result.tracks;
      renderSongs(this.songs);
    } catch {}
  }
}
