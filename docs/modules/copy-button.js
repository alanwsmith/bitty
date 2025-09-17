export default class {
  #theTimeout = null;
  #originalText = "Copy";

  async copyText(event, _el) {
    const elToCopy = document.querySelector(event.target.dataset.target);
    if (event.target.innerHTML !== "Copied") {
      this.#originalText = event.target.innerHTML;
    }
    try {
      let content;
      if (elToCopy.value) {
        content = elToCopy.value;
      } else {
        content = elToCopy.innerText;
      }
      await navigator.clipboard.writeText(content);
      event.target.innerHTML = "Copied";
    } catch (err) {
      event.target.innerHTML = "Error copying";
    }
    if (this.#theTimeout !== null) {
      clearTimeout(this.#theTimeout);
    }
    this.#theTimeout = setTimeout(
      (theButton) => {
        event.target.innerHTML = this.#originalText;
      },
      2000,
      event.target,
    );
  }
}
