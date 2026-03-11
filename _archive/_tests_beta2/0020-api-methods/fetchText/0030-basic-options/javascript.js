window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  async $SIGNAL_NAME(ev, el) {
    const key = "key-$HASH";
    const url =
      "/[@ file.parent @]/includes/0020-api-methods/items/fetchTEXT/tests/0030-basic-options/payload.txt";
    const options = {
      // Options in this object are added
      // directly to the internal fetch call.
      //
      // NOTE: The documentation server doesn't
      // provide the responses necessary to provide
      // a live example here. Check on the `fetchJSON()`
      // entry for a live example.
    };
    const response = await this.api.fetchTEXT(key, url, options);
    if (response.ok === true && response.error === null) {
      el.innerHTML = this.text[key];
    }
  }
};
