export default class {
  async bittyInit() {
    await state.isReady();
  }

  secondExample(_, el) {
    el.innerHTML = state.ping;
  }
}
