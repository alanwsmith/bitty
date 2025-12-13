function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.BittyDocTestRunner = class {
  async bittyReady() {
    await sleep(300);
    this.api.localTrigger("testResults");
  }

  testResults(_, el) {
    let totalTest = 0;
    let failed = 0;
    document.querySelectorAll("[data-expected]").forEach((el) => {
      totalTest += 1;
      if (el.dataset.expected === el.innerHTML.trim()) {
        el.classList.add("doc-test-passed");
      } else {
        failed += 1;
        el.classList.add("doc-test-failed");
      }
    });
    el.innerHTML = "test results";
  }
};
