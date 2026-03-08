export const bitty = {};

export function signal_D2343(ev, sender, el) {
  const json = bitty.loadData("no-storage-for-signal_D2343", {
    targetsignal_D2343: true,
  });
  if (json.targetsignal_D2343 === true) {
    el.innerHTML = bitty.time();
  }
}
