export default class {
  demoSendingFromChildToParent(_event, element) {
    element.innerHTML = Date.now();
  }
}