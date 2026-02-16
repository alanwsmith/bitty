window.Class415EB = class {
  bittyReady() {
    this.api.trigger("signal_415EB");
  }

  async signal_415EB(ev, el) {
    const key = "key-415EB";
    const url =
      "/[@ file.parent @]/includes/0020-api-methods/items/fetchTEXT/tests/0010-basic-fetch/payload.txt";
    await this.api.fetchTEXT(key, url);
    el.innerHTML = this.text[key].trim();
  }
};
