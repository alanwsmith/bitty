export const b = {};

export function snippetSignal(_, sender, el) {
  if (sender.prop("key") === el.prop("key")) {
    el.innerHTML = b.time();
  }
}