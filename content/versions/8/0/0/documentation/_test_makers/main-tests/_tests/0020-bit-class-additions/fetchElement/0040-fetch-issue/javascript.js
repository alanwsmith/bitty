#key = "el_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/intentionally-missing-file.html";
  const result = await this.fetchElement(this.#key, url);
  if (result.level === "error" && result.ok === false) {
    el.innerHTML = "ok";
  }
}