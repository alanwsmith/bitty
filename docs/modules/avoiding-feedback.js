export default class {
  update(event, el) {
    if (el.dataset.uuid !== event.target.dataset.uuid) {
      el.value = event.target.value;
    }
  }
}
