export const bitty = {};

export function signal_e9fca(ev, sender, el) {
  el.innerHTML = `passed ${bitty.localTimestamp()}`;
}

export async function run_signal_e9fca(ev, sender, el) {
  await bitty.sleep(100);
  document.querySelector(`[data-s~=signal_e9fca]`).click();
}
