window.MouseOverOutListener = class {
  listenerMouseOverAndOut(_, el) {
    el.innerHTML = event.type;
  }
}
