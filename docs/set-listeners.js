// deno-fmt-ignore-file

export class Widget {

  $sawMouse(el, data) {
    el.innerHTML = `${data.type} at ${Date.now()}`;
  }

}
