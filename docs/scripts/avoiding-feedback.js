// deno-fmt-ignore-file

export default class {
  update(el, event) {
    if (el.dataset.uuid !== event.target.dataset.uuid) {
      el.value = event.target.value;
    }
  }
}
