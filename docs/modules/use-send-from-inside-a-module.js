export default class {
  init(_el) {
    this.api.doSend("updateViaSendFromModule");
  }

  updateViaSendFromModule(_event, el) {
    el.innerHTML = "updated from module";
  }
}
