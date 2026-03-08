export const bitty = {};

export function signal_FA2FA(ev, sender, el) {
  const json = bitty.loadData("no-storage-for-signal_FA2FA", {
    targetsignal_FA2FA: true,
  });
  if (json.targetsignal_FA2FA === true) {
    el.innerHTML = bitty.time();
  }
}
