function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async showResults(event, element) {
    element.innerHTML = "Gathering test results...";
    await sleep(1000);
    element.innerHTML = "TODO: Show test results report";
  }
}
