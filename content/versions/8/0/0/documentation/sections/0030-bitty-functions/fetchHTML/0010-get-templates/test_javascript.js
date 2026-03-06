export const bitty = {};

export async function signal_EEECD(ev, sender, el) {
  const templates = await bitty.fetchHTML(
    "/versions/8/0/0/documentation/samples/valid-templates/index.html",
  );
  const checkEl = templates.alfa.querySelector("div");
  if (checkEl.innerHTML = "alfa") {
    el.innerHTML = bitty.localTimestamp();
  }
}
