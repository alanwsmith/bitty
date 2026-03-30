export const b = {};

export function signal_4ED33_v1(_, __, el) {
  b.config.getState.attributes.push("data-key");
  const pageState = b.getState();
  for (const savedValues of pageState) {
    if (savedValues.id === "target_4ED33_v1") {
      if (
        savedValues.keys.value === "value_4ED33_v1" &&
        savedValues.attributes["aria-hidden"] === "false" &&
        savedValues.attributes["data-key"] === "key_4ED33_v1"
      ) {
        el.innerHTML = b.time();
      }
    }
  }
}
