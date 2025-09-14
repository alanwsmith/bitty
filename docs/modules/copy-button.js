export default class {
  async copyText(_el, event) {
    const elToCopy = document.querySelector(event.target.dataset.target);
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
    setTimeout(
      (theButton) => {
        event.target.innerHTML = "Copy";
      },
      2000,
      event.target,
    );
  }
}
