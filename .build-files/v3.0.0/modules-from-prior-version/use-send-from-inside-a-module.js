export default class {
  init(_element) {
    this.api.doSend("updateViaSendFromModule");
  }

  updateViaSendFromModule(_event, element) {
    element.innerHTML = "updated from module";
  }
}
