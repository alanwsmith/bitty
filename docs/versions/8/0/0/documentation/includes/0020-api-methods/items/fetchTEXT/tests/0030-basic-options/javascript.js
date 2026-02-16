window.ClassE1FBF = class {
  bittyReady() {
    this.api.trigger("signal_E1FBF");
  }

  async signal_E1FBF(ev, el) {
    const key = "key-E1FBF";
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
