export const b = {};

export function signal_2987A_v1(ev, sender, el) {
  console.log(b.getState());
  const payload = [
    { id: "target_2987A_v1", ariaHidden: true },
  ];
  b.setState(payload);
  const checkEl = b.qs("#target_2987A_v1");
  if (checkEl.ariaHidden === true) {
    el.innerHTML = b.time();
  }
}
