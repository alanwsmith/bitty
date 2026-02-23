class DetailsOpener {
  async bittyReady() {
    console.log("OPENERE HERE1");
    await this.sleep(2500);
    console.log("OPENERE HERE2");
    this.loadJSON(this.key(), { openItems: [] });
    console.log("OPENERE HERE3");
    this.trigger("checkSize initPage");
    this.trigger("checkSize");
    console.log("OPENERE HERE4");
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
