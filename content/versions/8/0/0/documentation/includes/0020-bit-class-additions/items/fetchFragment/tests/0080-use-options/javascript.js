#key = "fragment_signal_6F792";

async signal_6F792(url, el) {
  const options = {
    fetchOptions: {
      headers: {
        "x-bitty-test": "key_signal_6F792",
      },
    },
  };
  await this.fetchFragment(this.#key, url, null, options);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  this.send(url, "signal_6F792");
}