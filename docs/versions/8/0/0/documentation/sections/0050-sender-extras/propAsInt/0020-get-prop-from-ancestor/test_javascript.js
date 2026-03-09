export const bitty = {};

export function signal_05622_alfa(_, sender, el) {
  if (sender.propAsInt("key") === 200) {
    el.innerHTML = bitty.time();
  }
}
