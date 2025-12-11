const t = {
  blockWrapper: `
<div data-index="INDEX" class="accent-border default-padding">
  <div data-receive="copyText">BLOCK</div>
  <div class="text-align-right">
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

  copyText(_, el) {
    if (el.propMatchesSender("index")) {
      console.log(el);
    }
  }
}
