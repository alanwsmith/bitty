// class DetailsOpener {

//   async bittyReady() {
//     this.loadJSON(this.key(), []);
//     this.checkSize();
//     this.initPage();
//   }

//   checkSize() {
//     if (
//       this.json[this.key()].length !==
//         document.querySelectorAll("details").length
//     ) {
//       this.json[this.key()] = [];
//     }
//   }

//   initPage() {
//     document.querySelectorAll("details").forEach((detailsEl, index) => {
//       if (this.json[this.key()][index]) {
//         detailsEl.open = true;
//       }
//       detailsEl.addEventListener("toggle", (ev) => {
//         this.updateDetailsToggle();
//       });
//     });
//     this.info("Initialized Details Opener");
//   }

//   key() {
//     return `details-opener-${window.location.pathname}`;
//   }

//   updateDetailsToggle() {
//     document.querySelectorAll("details").forEach((detailsEl, index) => {
//       this.json[this.key()][index] = detailsEl.open;
//     });
//     this.saveJSON(this.key());
//   }
// }

// export { DetailsOpener };
