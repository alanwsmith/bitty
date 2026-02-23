#key = "svg_signal_9F02E";

async signal_9F02E(_, el) {
  const url = "/intentionally-missing-file.svg";
  const result = await this.fetchSVG(this.#key, url);
  if (result.level === "error" && result.ok === false) {
    el.innerHTML = "ok";
  }
}
