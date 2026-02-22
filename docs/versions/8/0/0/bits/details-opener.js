class DetailsOpener {
  bittyReady() {
    this.loadJSON(this.key(), { openItems: [] });
    console.log(this.json[this.key()]);
    this.trigger("checkSize initPage");
  }

  checkSize() {
    if (
      this.json[this.key()].openItems.length !==
        document.querySelectorAll("details").length
    ) {
      this.json[this.key()].openItems = [];
    }
  }

  initPage() {
    document.querySelectorAll("details").forEach((detailsEl, index) => {
      if (this.json[this.key()][index]) {
        detailsEl.open = true;
      }
      detailsEl.addEventListener("toggle", (ev) => {
        this.update();
      });
    });
  }

  key() {
    return `details-${window.location.pathname}`;
  }

  update() {
    document.querySelectorAll("details").forEach((detailsEl, index) => {
      this.json[this.key()][index] = detailsEl.open;
    });
    this.saveJSON(this.key());
  }
}

export { DetailsOpener };
