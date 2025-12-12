export class DetailsOpener {
  #state;

  bittyReady() {
    this.loadState();
    this.setTagState();
    this.watchTags();
  }

  numberOfTags() {
    return document.querySelectorAll("details").length;
  }

  setTagState() {
    document.querySelectorAll("details").forEach((tag, tagIndex) => {
      if (
        this.#state.openTags.has(tagIndex)
      ) {
        console.log(tag);
        tag.open = true;
      } else {
        tag.open = false;
      }
    });
  }

  loadState() {
    const storage = localStorage.getItem(this.storageName());
    this.#state = {
      numberOfTags: this.numberOfTags(),
      openTags: new Set(),
    };
    // capture the initial state in case the number
    // of elements has changed.
    document.querySelectorAll("details").forEach((tag, tagIndex) => {
      if (tag.open === true) {
        this.#state.openTags.add(tagIndex);
      }
    });
    if (storage !== null) {
      const data = JSON.parse(storage).state;
      if (this.numberOfTags() === data.numberOfTags) {
        this.#state = {
          numberOfTags: data.numberOfTags,
          openTags: new Set(data.openTags),
        };
      }
    }
  }

  saveState() {
    localStorage.setItem(
      this.storageName(),
      JSON.stringify({
        "state": {
          numberOfTags: this.#state.numberOfTags,
          openTags: [...this.#state.openTags],
        },
      }),
    );
  }

  storageName() {
    return `details-state-${window.location.pathname}`;
  }

  watchTags() {
    document.querySelectorAll("details").forEach((tag, tagIndex) => {
      tag.addEventListener("toggle", (event) => {
        if (tag.open) {
          this.#state.openTags.add(tagIndex);
        } else {
          this.#state.openTags.delete(tagIndex);
        }
        this.saveState();
      });
    });
  }
}
