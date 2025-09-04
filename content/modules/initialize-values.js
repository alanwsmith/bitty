// deno-fmt-ignore-file

export default class {
  update(el, event) {
    if (!event) {
      el.value = 15;
    } else if (
      event.type === "input" &&
      el.dataset.uuid !== event.target.dataset.uuid) {
        el.value = event.target.value;
    }
  }
}
