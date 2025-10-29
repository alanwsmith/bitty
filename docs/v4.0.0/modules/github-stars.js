const t = {
  stars: `<github-stars
  :repo="alanwsmith/bitty"
  :text-color="var(--accent-faded)"
  :background-color="var(--background)"
></github-stars>`,
};

export default class {
  bittyInit() {
    if (this.api.fn.url().hostname !== "localhost") {
      this.api.appendChild(this.api.useTemplate(t.stars));
    }
  }
}
