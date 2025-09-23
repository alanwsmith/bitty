function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Alfa {
  runTest0210(event, element) {
    console.log(event);
    console.log("eeeeeeeeeeeeeeee");
    element.innerHTML = "PASSED";
  }
}

export class Bravo {
  async bittyInit() {
    await sleep(200); // pad time for module loading
    const btn = this.api.querySelector("button");
    btn.click();
  }
}
