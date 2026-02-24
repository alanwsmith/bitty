

async $SIGNAL_NAME(payload, el) {
  await this.fetchFragment("el_$HASH", payload.url, payload.fallback);
  el.innerHTML = this.renderFragment("el_$HASH").children[0].innerHTML;
}


run_$SIGNAL_NAME(_, __) {
  const fallbackElement = document.createElement("div");
  fallbackElement.innerHTML = "ok";
  const url = "/intentionally-missing-file.html";
  this.send(
    { url: url, fallback: fallbackElement },
    "$SIGNAL_NAME",
  );
}