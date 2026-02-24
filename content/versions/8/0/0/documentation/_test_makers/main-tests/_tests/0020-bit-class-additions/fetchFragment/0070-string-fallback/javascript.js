

async $SIGNAL_NAME(payload, el) {
  await this.fetchFragment("el_$HASH", payload.url, payload.fallback);
  el.innerHTML = this.renderFragment("el_$HASH").children[1].innerHTML;
}


run_$SIGNAL_NAME(_, __) {
  const fallback = "<div></div><div>ok</div>";
  const url = "/intentionally-missing-file.html";
  this.send(
    { url: url, fallback: fallback },
    "$SIGNAL_NAME",
  );
}