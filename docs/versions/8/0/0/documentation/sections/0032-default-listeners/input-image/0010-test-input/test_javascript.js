export const b = {};

const targetType = "click";
let gotBadEvent = false;

export function signal_F3E96_v1(ev, sender, el) {
  if (ev.type !== targetType) {
    gotBadEvent = true;
  }
  if (gotBadEvent === true) {
    el.innerHTML = `got an invalid event that is not ` + targetType;
  } else {
    el.innerHTML = b.time();
  }
}

