window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  async $SIGNAL_NAME(ev, el) {
    const url =
      "/[@ file.parent @]/includes/0020-api-methods/items/getTEXT/tests/0030-basic-options/payload.txt";
    const subs = {};
    const options = {
      // Options in this object are padded
      // directly to the internal fetch call.
    };
    const response = await this.api.getTEXT(url, subs, options);
    el.innerHTML = response.value;
  }
};
