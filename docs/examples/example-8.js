export class Wrapper {
  $htmlGotInput(event) {
    console.log(event);
    return `Input at: ${Date.now()}`;
  }
}
