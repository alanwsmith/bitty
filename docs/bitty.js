class BittyJs extends HTMLElement {
  #receivers = [];

  constructor() {
    super();
  }

  connectedCallback() {
    if (this.dataset.wrapper) {
      import(this.dataset.wrapper).then((mod) => {
        this.wrapper = new mod.Wrapper();
        this.loadReceivers();
        this.init();
        this.addEventListeners();
      });
    }
    // TODO: error messages if something
    // went wrong
  }

  addEventListeners() {
    this.addEventListener("input", (event) => {
      this.handleChange(event);
    });
    this.addEventListener("click", (event) => {
      this.handleChange(event);
    });
    // TODO: figure out what other
    // listeners should be here
  }

  addFunction(r, el) {
    if (r.startsWith("value")) {
      this.#receivers.push({
        "key": r,
        "f": () => {
          try {
            el.value = this.wrapper[`$${r}`]();
          } catch (error) {
            console.error(error);
            console.error(`Tried: $${r}`);
          }
        },
      });
    } else {
      this.#receivers.push({
        "key": r,
        "f": () => {
          try {
            el.innerHTML = this.wrapper[`$${r}`]();
          } catch (error) {
            console.error(error);
            console.error(`Tried: $${r}`);
          }
        },
      });
    }
  }

  handleChange(event) {
    if (event.target === undefined) {
      return;
    }
    if (event.target.dataset === undefined) {
      return;
    }
    if (event.target.dataset.f !== undefined) {
      event.target.dataset.f.split("|").forEach((f) => {
        try {
          this.wrapper[`_${f}`](event.target);
        } catch (error) {
          console.log(error);
          console.error(`Tried: _${f}`);
        }
      });
    }
    if (event.target.dataset.s !== undefined) {
      event.target.dataset.s.split("|").forEach((key) => {
        if (key.startsWith("batch")) {
          this.wrapper.batches[key].forEach((bKey) => {
            this.#receivers.forEach((r) => {
              if (r.key === bKey) {
                r.f();
              }
            });
          });
        } else {
          this.#receivers.forEach((r) => {
            if (r.key === key) {
              r.f();
            }
          });
        }
      });
    }
  }

  init() {
    if (this.dataset.init !== undefined) {
      this.sendUpdates(this.dataset.init);
    }
  }

  sendUpdates(updates) {
    updates.split("|").forEach((key) => {
      if (key.startsWith("batch")) {
        this.wrapper.batches[key].forEach((bKey) => {
          this.#receivers.forEach((r) => {
            if (r.key === bKey) {
              r.f();
            }
          });
        });
      } else {
        this.#receivers.forEach((r) => {
          if (r.key === key) {
            r.f();
          }
        });
      }
    });
  }

  loadReceivers() {
    this.#receivers = [];
    const els = this.querySelectorAll(`[data-r]`);
    els.forEach((el) => {
      el.dataset.r.split("|").forEach((r) => {
        if (r.startsWith("batch")) {
          this.wrapper.batches[r].forEach((key) => {
            this.addFunction(key, el);
          });
        } else {
          this.addFunction(r, el);
        }
      });
    });
  }
}

customElements.define("bitty-js", BittyJs);

//init() {
//  if (this.dataset.init !== undefined) {
//    // TODO: Refactor this and the same part
//    // inside of handleUpdate to extract them
//    // into a single function
//    this.dataset.init.split("|").forEach((key) => {
//      if (key.startsWith("batch")) {
//        this.#batches[key].forEach((bKey) => {
//          this.#receivers.forEach((r) => {
//            if (r.key === bKey) {
//              //console.log(bKey);
//              r.f();
//            }
//          });
//        });
//      } else {
//        this.#receivers.forEach((r) => {
//          if (r.key === key) {
//            r.f();
//          }
//        });
//      }
//    });
//  }
//}

// this.loadData();
//
// this.doPreflightCheck();
// this.loadReceivers();
// this.addEventListeners();
// this.init();

// doPreflightCheck() {
//   const checkList = new Set();
//   ["r", "s"].forEach((key) => {
//     document.querySelectorAll(`[data-${key}]`).forEach((el) => {
//       el.dataset[key].split("|").forEach((d) => {
//         checkList.add(`$${d}`);
//       });
//     });
//   });
//   document.querySelectorAll(`[data-f]`).forEach((el) => {
//     el.dataset.f.split("|").forEach((d) => {
//       checkList.add(`_${d}`);
//     });
//   });
//   checkList.forEach((check) => {
//     if (!check.startsWith("$batch")) {
//       if (this[check] === undefined) {
//         console.error(`Missing Function: ${check}`);
//       }
//       // TODO: Do preflight check for batches
//       // } else {
//       //   if (this.#batches[check] === undefined) {
//       //     console.error(`Missing Batch: ${check}`);
//       //   }
//     }
//   });
// }

//handleUpdate(event) {
//  if (event.target === undefined) {
//    return;
//  }
//  if (event.target.dataset === undefined) {
//    return;
//  }
//  if (event.target.dataset.f === undefined) {
//    return;
//  }
//  event.target.dataset.f.split("|").forEach((f) => {
//    this[`_${f}`](event.target);
//  });
//  event.target.dataset.s.split("|").forEach((key) => {
//    if (key.startsWith("batch")) {
//      this.#batches[key].forEach((bKey) => {
//        this.#receivers.forEach((r) => {
//          if (r.key === bKey) {
//            //console.log(bKey);
//            r.f();
//          }
//        });
//      });
//    } else {
//      this.#receivers.forEach((r) => {
//        if (r.key === key) {
//          r.f();
//        }
//      });
//    }
//  });
//}

//init() {
//  if (this.dataset.init !== undefined) {
//    // TODO: Refactor this and the same part
//    // inside of handleUpdate to extract them
//    // into a single function
//    this.dataset.init.split("|").forEach((key) => {
//      if (key.startsWith("batch")) {
//        this.#batches[key].forEach((bKey) => {
//          this.#receivers.forEach((r) => {
//            if (r.key === bKey) {
//              //console.log(bKey);
//              r.f();
//            }
//          });
//        });
//      } else {
//        this.#receivers.forEach((r) => {
//          if (r.key === key) {
//            r.f();
//          }
//        });
//      }
//    });
//  }
//}

// loadData() {
//   this.#data = JSON.parse(JSON.stringify(exampleData));
// }

// loadReceivers() {
//   this.#receivers = [];
//   const els = document.querySelectorAll(`[data-r]`);
//   els.forEach((el) => {
//     el.dataset.r.split("|").forEach((r) => {
//       if (r.startsWith("batch")) {
//         this.#batches[r].forEach((key) => {
//           this.addFunction(key, el);
//         });
//       } else {
//         this.addFunction(r, el);
//       }
//     });
//   });
// }

// addFunction(r, el) {
//   if (r.startsWith("value")) {
//     this.#receivers.push({
//       "key": r,
//       "f": () => {
//         try {
//           el.value = this[`$${r}`]();
//         } catch (error) {
//           console.error(error);
//           console.error(`Tried: $${r}`);
//         }
//       },
//     });
//   } else {
//     this.#receivers.push({
//       "key": r,
//       "f": () => {
//         try {
//           el.innerHTML = this[`$${r}`]();
//         } catch (error) {
//           console.error(error);
//           console.error(`Tried: $${r}`);
//         }
//       },
//     });
//   }
// }

//   #data = {};
//   #receivers = [];

//   #batches = {
//     "batchLatest": ["htmlC", "htmlH", "htmlL", "htmlMode"],
//     "batchModeChange": [
//       "htmlC",
//       "htmlH",
//       "htmlL",
//       "htmlMode",
//       "valueC",
//       "valueH",
//       "valueL",
//     ],
//     "batchInit": [
//       "htmlC",
//       "htmlH",
//       "htmlL",
//       "htmlMode",
//       "valueC",
//       "valueH",
//       "valueL",
//     ],
//   };

//   _handleSlider(target) {
//     const value = parseFloat(target.value);
//     const slider = target.dataset.key;
//     this.#data.modes[this.#data.activeMode][slider] = value;
//   }

//   _handleModeSwitch(target) {
//     this.#data.activeMode = target.value;
//   }

//   $htmlC() {
//     return this.#data.modes[this.#data.activeMode].c;
//   }

//   $htmlH() {
//     return this.#data.modes[this.#data.activeMode].h;
//   }

//   $htmlL() {
//     return this.#data.modes[this.#data.activeMode].l;
//   }

//   $htmlMode() {
//     return this.#data.activeMode;
//   }

//   $valueC() {
//     return this.#data.modes[this.#data.activeMode].c;
//   }

//   $valueH() {
//     return this.#data.modes[this.#data.activeMode].h;
//   }

//   $valueL() {
//     return this.#data.modes[this.#data.activeMode].l;
//   }
//
// const exampleData = {
//   "activeMode": "dark",
//   "modes": {
//     "dark": {
//       "c": 0.1,
//       "h": 200,
//       "l": 20,
//     },
//     "light": {
//       "c": 0.1,
//       "h": 200,
//       "l": 80,
//     },
//   },
// };
//
// if (r.startsWith("value")) {
//   this.#receivers.push({
//     "key": r,
//     "f": () => {
//       try {
//         el.value = this[`$${r}`]();
//       } catch (error) {
//         console.error(error);
//         console.error(`Tried: $${r}`);
//       }
//     },
//   });
// } else {
//   this.#receivers.push({
//     "key": r,
//     "f": () => {
//       try {
//         el.innerHTML = this[`$${r}`]();
//       } catch (error) {
//         console.error(error);
//         console.error(`Tried: $${r}`);
//       }
//     },
//   });
// }
