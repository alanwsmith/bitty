window.Class7F917 = class {
  bittyReady() {
    this.api.trigger("signal_7F917");
  }

  async signal_7F917(ev, el) {
    const url =
      "/[@ file.parent @]/includes/0020-api-methods/items/getTEXT/tests/0010-basic-get/payload.txt";
    console.log(url);
    const response = await this.api.getTEXT(url);
    if (response.value !== undefined) {
      el.innerHTML = response.value;
    } else {
      el.innerHTML = response.error;
    }
  }
};
