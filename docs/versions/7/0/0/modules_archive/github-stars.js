const t = {
  stars: `<github-stars
  :repo="alanwsmith/bitty"
  :text-color="var(--accent-faded)"
  :background-color="var(--background)"
></github-stars>`,
};

export default class {
  bittyInit() {
    const url = new URL(window.location.href);
    if (url.hostname !== "localhost") {
      this.api.appendChild(this.api.makeElement(t.stars));
    }
  }
}
