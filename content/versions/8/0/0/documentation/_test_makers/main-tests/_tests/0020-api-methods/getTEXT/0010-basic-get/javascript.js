window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  async $SIGNAL_NAME(ev, el) {
    const url =
      "/[@ file.parent @]/includes/0020-api-methods/items/getTEXT/tests/0010-basic-get/payload.txt";
    const response = await this.api.getTEXT(url);
    el.innerHTML = response.value;
  }
};
