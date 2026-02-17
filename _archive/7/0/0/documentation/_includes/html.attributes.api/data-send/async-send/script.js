window.AsyncSend = class {
   async asyncSendDemo(_event, el) {
    el.innerHTML = "Loading...";
    await new Promise(resolve => setTimeout(resolve, 2000));
    el.innerHTML = "Done";
  }
}