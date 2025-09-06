export default class {
  init() {
    [...this.api.querySelectorAll("[data-receive=update]")]
      .forEach((el) => {
        el.value = 90;
    });
  }
  update(el, event) {
    if(el.dataset.uuid !== event.target.dataset.uuid) {
        el.value = event.target.value;
    }
  }
}
