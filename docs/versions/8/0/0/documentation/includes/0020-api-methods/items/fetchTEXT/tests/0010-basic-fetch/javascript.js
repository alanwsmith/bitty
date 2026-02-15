window.Class40476 = class {
  bittyReady() {
    this.api.trigger("signal_40476");
  }

  async signal_40476(ev, el) {
    const key = "key-40476";
    const url =
      "/[@ file.parent @]/includes/0020-api-methods/items/fetchTEXT/tests/0010-basic-fetch/payload.txt";
    await this.api.fetchTEXT(key, url);
    el.innerHTML = this.api.text(key).trim();
  }
};
