window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  async $SIGNAL_NAME(ev, el) {
    const key = "key-$HASH";
    const url =
      "/[@ file.parent @]/includes/0020-api-methods/items/fetchTEXT/tests/0010-basic-fetch/payload.txt";
    await this.api.fetchTEXT(key, url);
    el.innerHTML = this.text[key].trim();
  }
};
