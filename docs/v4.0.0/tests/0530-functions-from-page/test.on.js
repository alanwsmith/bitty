export default class {
  runTest0530(event, el) {
    if (event.target.dataset.uuid === this.api.fn.test0530())  {
      el.innerHTML = "PASSED";
    }
  }
}