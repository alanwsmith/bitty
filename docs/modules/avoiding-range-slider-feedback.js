export default class {
  update(event, element) {
    if (el.dataset.uuid !== event.target.dataset.uuid) {
      el.value = event.target.value;
    }
  }
}
