#key = "fragment_signal_EEB5B";

async signal_EEB5B(payload, el) {
  const result = await this.fetchFragment(
    this.#key,
    payload.url,
    payload.fallback,
  );
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  } else {
    el.innerHTML = "bug";
  }
}


run_signal_EEB5B(_, __) {
  const fallbackTemplate = document.createElement("template");
  fallbackTemplate.innerHTML = "<div>ok</div>";
  const url = "/intentionally-missing-file.html";
  this.send(
    { url: url, fallback: fallbackTemplate.content },
    "signal_EEB5B",
  );
}