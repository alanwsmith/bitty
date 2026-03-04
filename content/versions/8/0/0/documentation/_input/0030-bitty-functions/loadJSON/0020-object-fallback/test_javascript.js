export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const json = bitty.loadJSON("missing-$_SIGNAL_", { target$_SIGNAL_: true });
  if (json.target$_SIGNAL_ === true) {
    el.innerHTML = bitty.localTimestamp();
  }
}
