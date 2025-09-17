export default class {
  bittyInit() {
    [...this.api.querySelectorAll("[data-receive=update]")]
      .forEach((el) => {
        el.value = 90;
      });
  }
  update(event, el) {
    if (el.dataset.uuid !== event.target.dataset.uuid) {
      el.value = event.target.value;
    }
  }
}
