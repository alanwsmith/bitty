export const b = {};

let gotSomethingWrong = false;

export function $_SIGNAL_(ev, __, el) {
  if (ev.type !== "input") {
    gotSomethingWrong = true;
  }
  if (gotSomethingWrong === true) {
    el.innerHTML = "got something other than an input event";
  } else {
    el.innerHTML = b.time();
  }
}
