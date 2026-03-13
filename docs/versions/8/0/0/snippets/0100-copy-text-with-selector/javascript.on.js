export const b = {};

export async function copyText(ev, __, ___) {
  if (await b.copy("#targetDiv") === true) {
    ev.target.innerHTML = "Copied";
    b.debounce("textCopy", "restoreText", 1400);
  } else {
    ev.target.innerHTML = "Error: Text could not be copied";
    b.debounce("textCopy", "restoreText", 1400);
  }
}

export function restoreText(_, __, el) {
  el.innerHTML = "Copy Text";
}