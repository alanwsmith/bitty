export const b = {};

let gotBadEvent = false;

export function $_SIGNAL_(ev, sender, el) {
  if (ev.type !== "keydown") {
    gotBadEvent = true;
  }
  if (gotBadEvent === true) {
    el.innerHTML = "got an invalid event";
  } else {
    el.innerHTML = b.time();
  }
}
