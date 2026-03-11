async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  const fallback = null;
  const options = {
    headers: {
      "x-bitty-test": "key_$SIGNAL_NAME",
    },
  };
  await this.fetchFragment("el_$HASH", url, fallback, options);
  el.replaceWith(this.renderFragment("el_$HASH"));
}
