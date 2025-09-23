function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  runTest(_event, el) {
    el.innerHTML = "PASSED";
  }
}
