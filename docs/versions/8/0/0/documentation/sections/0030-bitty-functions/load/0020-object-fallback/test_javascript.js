export const bitty = {};

export function signal_D2343_alfa(ev, sender, el) {
  const json = bitty.load("no-storage-for-signal_D2343_alfa", {
    targetsignal_D2343_alfa: true,
  });
  if (json.targetsignal_D2343_alfa === true) {
    el.innerHTML = bitty.time();
  }
}
