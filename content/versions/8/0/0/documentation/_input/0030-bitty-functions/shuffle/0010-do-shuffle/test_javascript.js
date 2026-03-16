export const b = {};

const items = ["alfa", "bravo", "charlie", "delta", "echo", "foxtrot"];

export function $_SIGNAL_(ev, sender, el) {
  const initialLength = items.length;
  b.shuffle(items);
  sender.innerHTML = items.join(" - ");
  if (items.length === initialLength) {
    el.innerHTML = b.time();
  }
}
