export const b = {};

export function signal_9FD9F_v1(_, __, el) {
  const pageState = b.getState();
  for (const savedValues of pageState) {
    if (savedValues.id === "target_9FD9F_v1") {
      if (
        savedValues.value === "value_9FD9F_v1" &&
        savedValues.ariaHidden === "false"
      ) {
        el.innerHTML = b.time();
      }
    }
  }
}
