export const bitty = {};

export async function $_SIGNAL_(ev, sender, el) {
  const resp = await bitty.fetchTemplates(
    "$_SAMPLES_DIR_/templates/index.html",
  );
  console.log(resp);

  el.innerHTML = bitty.localTimestamp();
}
