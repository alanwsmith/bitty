window.BittyparentEl = class {
  getBittyParent(_, el) {
    el.innerHTML = el.bittyParent.dataset.bittyid;
  }
}