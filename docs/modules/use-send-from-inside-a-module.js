export default class {
  init(_el) {
    this.api.doSend("updateViaSendFromModule");
  }

  updateViaSendFromModule(el, _event) {
    el.innerHTML = "updated from module";
  }
}
