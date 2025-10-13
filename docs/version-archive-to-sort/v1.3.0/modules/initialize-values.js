export default class {
  bittyInit() {
    [...this.api.querySelectorAll("[type=range]")]
      .forEach((element) => {
        element.value = 90;
      });
  }
}