export default class {
  async bittyInit() {
    await state.isReady();
  }

  mainExample(_, el) {
    el.innerHTML = state.ping;
  }
}
