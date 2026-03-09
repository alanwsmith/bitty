export const bitty = {};

export function signal_4E815_alfa(_, __, el) {
  console.log(`--${el.valAsFloat}--`);
  if (el.valAsFloat === 1.1) {
    bitty.trigger("signal_4E815_bravo");
  }
}

export function signal_4E815_bravo(_, __, el) {
  el.innerHTML = bitty.time();
}
