export class Wrapper {
  $htmlGotInput(event) {
    return `${event.type} at: ${Date.now()}`;
  }
}
