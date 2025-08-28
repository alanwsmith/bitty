// deno-fmt-ignore-file

export default class {

  updateText(el, _) {
    const ts = Date.now();
    el.innerHTML = `Clicked at:<br>${ts}`;
  }

}
