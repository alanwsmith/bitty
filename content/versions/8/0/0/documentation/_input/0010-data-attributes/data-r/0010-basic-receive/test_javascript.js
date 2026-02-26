export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  el.innerHTML = `passed $${bitty.localTimestamp()}`;
}

export async function run_$_SIGNAL_(ev, sender, el) {
  await bitty.sleep(100);
  document.querySelector(`[data-s~=$_SIGNAL_]`).click();
}
