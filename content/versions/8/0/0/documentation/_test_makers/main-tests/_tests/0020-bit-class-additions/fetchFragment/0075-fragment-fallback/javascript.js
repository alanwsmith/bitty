#key = "fragment_$SIGNAL_NAME";

async $SIGNAL_NAME(payload, el) {
  await this.fetchFragment(this.#key, payload.url, payload.fallback);
  el.innerHTML = this.renderFragment(this.#key).children[0].innerHTML;
}


run_$SIGNAL_NAME(_, __) {
  const fallbackTemplate = document.createElement("template");
  fallbackTemplate.innerHTML = "<div>ok</div>";
  const url = "/intentionally-missing-file.html";
  this.send(
    { url: url, fallback: fallbackTemplate.content },
    "$SIGNAL_NAME",
  );
}