export const b = {};

export function $_SIGNAL_(_, __, el) {
  b.config.getState.attributes.push("data-key");
  const pageState = b.getState();
  for (const savedValues of pageState) {
    if (savedValues.id === "target_$_TEST_ID_") {
      if (
        savedValues.keys.value === "value_$_TEST_ID_" &&
        savedValues.attributes["aria-hidden"] === "false" &&
        savedValues.attributes["data-key"] === "key_$_TEST_ID_"
      ) {
        el.innerHTML = b.time();
      }
    }
  }
}
