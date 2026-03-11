export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const container = b.qs("#container_$_SIGNAL_");
  const els = b.qsa(".target_$_SIGNAL_");
  if (els[2].innerHTML === "charlie $_SIGNAL_") {
    el.innerHTML = b.time();
  }
}
