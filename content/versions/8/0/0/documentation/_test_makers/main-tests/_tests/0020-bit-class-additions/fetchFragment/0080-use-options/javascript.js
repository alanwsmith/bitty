

async $SIGNAL_NAME(url, el) {
  const options = {
    fetchOptions: {
      headers: {
        "x-bitty-test": "key_$SIGNAL_NAME",
      },
    },
  };
  await this.fetchFragment("el_$HASH", url, null, options);
  el.innerHTML = this.renderFragment("el_$HASH").children[1].innerHTML;
}


bittyReady() {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  this.send(url, "$SIGNAL_NAME");
}