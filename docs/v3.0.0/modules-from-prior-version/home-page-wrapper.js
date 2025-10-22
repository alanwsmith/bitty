export default class {
  majorVersion(_event, element) {
    element.innerHTML = this.api.version[0];
  }

  minorVersion(_event, element) {
    element.innerHTML = this.api.version[1];
  }

  patchVersion(_event, element) {
    element.innerHTML = this.api.version[2];
  }

  rcVersion(_event, element) {
    if (this.api.version[3]) {
      const rcNum = this.api.version[3].replace("rc", "");
      element.innerHTML = ` - Release Candidate ${rcNum}`;
    }
  }
}