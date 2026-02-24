#key = "svg_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/intentionally-missing-file.svg";
  const result = await this.fetchSVG("el_$HASH", url);
  if (result.level === "error" && result.ok === false) {
    el.innerHTML = "ok";
  }
}
