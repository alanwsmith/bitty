

async signal_6F792(url, el) {
  const options = {
    fetchOptions: {
      headers: {
        "x-bitty-test": "key_signal_6F792",
      },
    },
  };
  await this.fetchFragment("el_6F792", url, null, options);
  el.innerHTML = this.renderFragment("el_6F792").children[1].innerHTML;
}


bittyReady() {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  this.send(url, "signal_6F792");
}