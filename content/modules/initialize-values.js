export default class {
  bittyInit() {
    [...this.api.querySelectorAll("[type=range]")]
      .forEach((el) => {
        el.value = 90;
      });
  }
}
