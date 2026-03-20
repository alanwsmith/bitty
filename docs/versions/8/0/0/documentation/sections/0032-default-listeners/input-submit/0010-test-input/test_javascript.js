export const b = {};

const targetTypes = ["click"];
let gotBadEvent = false;

export function signal_EC355_v1(ev, sender, el) {
  if (!targetTypes.includes(ev.type)) {
    gotBadEvent = true;
  }
  if (gotBadEvent === true) {
    el.innerHTML = `got an invalid event that is not ` + targetTypes;
  } else {
    el.innerHTML = b.time();
  }
}

