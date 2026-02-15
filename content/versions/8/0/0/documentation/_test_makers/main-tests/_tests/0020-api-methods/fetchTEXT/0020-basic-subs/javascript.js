window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  // async $SIGNAL_NAME(ev, el) {
  //   const url =
  //     "/[@ file.parent @]/includes/0020-api-methods/items/getTEXT/tests/0020-basic-subs/payload.txt";
  //   const subs = {
  //     "REPLACE_ME": "ok",
  //   };
  //   const response = await this.api.getTEXT(url, subs);
  //   el.innerHTML = response.value;
  // }
};
