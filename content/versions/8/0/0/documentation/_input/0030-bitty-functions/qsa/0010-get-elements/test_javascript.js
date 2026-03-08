export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const els = bitty.qsa(".target_$_SIGNAL_");
  if (els[2].innerHTML === "charlie $_SIGNAL_") {
    el.innerHTML = bitty.localTimestamp();
  }
}
