export const bitty = {};

export function signal_74223(ev, sender, el) {
  const json = bitty.loadJSON("missing-signal_74223", { targetsignal_74223: true });
  if (json.targetsignal_74223 === true) {
    el.innerHTML = bitty.localTimestamp();
  }
}
