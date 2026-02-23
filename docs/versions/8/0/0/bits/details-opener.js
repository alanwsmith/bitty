class DetailsOpener {
  async bittyReady() {
    await this.sleep(2500);
    this.loadJSON(this.key(), { openItems: [] });
    this.trigger("checkSize initPage");
  }

  checkSize() {
    console.log("OPENER HERE5");
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
