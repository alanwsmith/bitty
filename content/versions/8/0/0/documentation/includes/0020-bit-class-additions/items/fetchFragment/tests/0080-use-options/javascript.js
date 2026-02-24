async signal_6F792(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  const fallback = null;
  const options = {
    headers: {
      "x-bitty-test": "key_signal_6F792",
    },
  };
  await this.fetchFragment("el_6F792", url, fallback, options);
  el.replaceWith(this.renderFragment("el_6F792"));
}
