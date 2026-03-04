export const bitty = {};

export async function signal_8958C(ev, sender, el) {
  const resp = await bitty.fetchTemplates(
    "/versions/8/0/0/documentation/samples/templates/index.html",
  );

  el.innerHTML = "wip";
  // el.innerHTML = bitty.localTimestamp();
}
