window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(_, el) {
    const url = "https://www.example.com";
    const options = {
      fetchOptions: {
        method: "POST",
      },
    };
    // The server this site uses doesn't accept
    // POST Requests. This is the line that
    // would make one:
    //
    // await this.fetchFragment(this.#key, url, options);
    //
    // Since the server would reject it, it's
    // not tested here.
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.trigger("test_$SIGNAL_NAME");
  }
};
