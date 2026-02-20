window.ClassBC346 = class {
  #key = "fragment_signal_BC346";

  async test_signal_BC346(_, el) {
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
    // await this.fetchFragment(key, url, null, options);
    //
    // Since the server would reject it, it's
    // not tested here.
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_BC346");
  }
};
