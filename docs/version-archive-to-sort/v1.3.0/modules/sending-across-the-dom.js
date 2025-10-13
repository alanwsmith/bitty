export default class {
  coverageDemo(event, element) {
    if (element.dataset.uuid === event.target.dataset.uuid) {
      element.innerHTML = "HERE";
    } else {
      element.innerHTML = "----";
    }
  }
}