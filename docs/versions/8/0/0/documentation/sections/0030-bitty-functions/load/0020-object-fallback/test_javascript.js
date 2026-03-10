export const b = {};

export function signal_D2343_v1(ev, sender, el) {
  const json = b.load("no-storage-for-signal_D2343_v1", {
    targetsignal_D2343_v1: true,
  });
  if (json.targetsignal_D2343_v1 === true) {
    el.innerHTML = b.time();
  }
}
