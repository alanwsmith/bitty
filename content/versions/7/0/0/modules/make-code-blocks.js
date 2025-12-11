const t = {
  blockWrapper: `
<div data-index="INDEX" class="default-border-radius accent-border default-padding">
  <div data-receive="copyText">BLOCK</div>
  <div class="text-align-right small-top-padding">
    <button data-send="copyText">Copy</button>
  </div>
</div>`,
};

export default class {
  bittyReady() {
    this.api.querySelectorAll(".code-block").forEach((codeBlock, index) => {
      const signals = codeBlock.dataset.receive
        ? [codeBlock.dataset.receive]
        : [];
      signals.push("codeBlock");
      codeBlock.dataset.receive = signals.join(" ");
      const subs = [
        ["INDEX", index],
        ["BLOCK", codeBlock],
      ];
      const newWrapper = this.api.makeElement(t.blockWrapper, subs);
      codeBlock.replaceWith(newWrapper);
    });
  }

  async copyText(ev, el) {
    if (el.propMatchesSender("index")) {
      try {
        await navigator.clipboard.writeText(el.innerText);
        ev.sender.innerHTML = "Copied";
        // TODO: figure out where to put this so
        // if you press the button multiple times
        // things don't go weird.
        setTimeout(() => {
          ev.sender.innerHTML = "Copy";
        }, 1400);
      } catch (err) {
        console.error("Could not copy to clipboard");
      }
      console.log(el);
    }
  }
}
