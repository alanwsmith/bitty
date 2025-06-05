/////////////////////////////////////////////////////
// bitty.js  - Version 0.2.3
/////////////////////////////////////////////////////

function debug(payload, el = null) {
  if (window && window.location && window.location.search) {
    const params = new URLSearchParams(window.location.search)
    if (params.has('debug')) {
      console.log(payload)
      if (el !== null) {
        console.log(el)
      }
    }
  }
}

/////////////////////////////////////////////////////

class BittyJs extends HTMLElement {
  // TODO: Deprecate #hashString in favor of join approach
  #hashString = '#######################################'
  #errors = [
    {
      id: 0,
      kind: ['Not Classified'],
      description: ['An unclassified error occurred.'],
      help: [
        [
          `Detailed help isn't available since this error is unclassified.`,
          `Use the line numbers from the error console to locate the source of the error and work from there.`,
        ],
      ],
      developerNote: [
        ` Use an ID from the BittyJS #errors variable to classify this error.`,
        `It's a bug if there's not an approprite classification. Please open an issue if you find an error without a clear mapping.`,
      ],
    },
    {
      id: 1,
      kind: ['Invalid Error ID'],
      description: [
        `An attempt to call an error with an ID of '__ERROR_ID__' was made. That ID does not exist in '#errors'.`,
      ],
      help: [
        [`Change the ID to one that's avaialble in the '#errors' variable.`],
        [
          `Create a custom error with the ID you're attempting to use.`,
          `NOTE: Custom error IDs should be above 9000 by convention.`,
        ],
      ],
      developerNote: [],
    },
    {
      id: 2,
      kind: ["A <bitty-js> tag is missing its 'data-bridge' attribute"],
      description: [
        `Every <bitty-js></bitty-js> element requires a 'data-bridge' attribute that connects it to a '.js' file that powers its functionality.`,
        `The 'data-bridge' attribute is missing from the <bitty-js></bitty-js> element with the 'data-uuid' attribute:`,
        `__UUID__`,
      ],
      help: [
        [
          `Add a 'data-bridge' attribute to the <bitty-js></bitty-js> tag with the path to its supporting '.js' module file. For example:`,
          `<bitty-js data-bridge="./path/to/module.js"></bitty-js>`,
        ],
      ],
      developerNote: [],
    },
  ]

  #listeners = ['click', 'input']
  #receivers = []

  addEventListeners() {
    this.#listeners.forEach((listener) => {
      this.addEventListener(listener, (event) => {
        this.requestUpdate.call(this, event)
      })
    })
  }

  addIds() {
    debug('Adding IDs')
    if (this.dataset.uuid === undefined) {
      this.dataset.uuid = self.crypto.randomUUID()
    }
    const els = this.querySelectorAll(`[data-r], [data-s], [data-c]`)
    els.forEach((el) => {
      if (el.dataset.uuid === undefined) {
        el.dataset.uuid = self.crypto.randomUUID()
      }
    })
  }

  addReceiver(key, el) {
    this.#receivers.push({
      key: key,
      f: (data) => {
        try {
          this.wires[`$${key}`](el, data)
        } catch (error) {
          console.error(error)
          console.error(`Tried: $${key}`)
        }
      },
    })
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.setId()
    this.setIds()
    if (this.dataset.bridge) {
    } else {
      this.error(2, this)
    }

    /*
    if (this.dataset.bridge) {
      import(this.dataset.bridge).then((mod) => {
        // this.wires = new mod.Wires();
        // this.requestUpdate = this.handleChange.bind(this);
        // Reminder: loadReceivers has to be in front of init
        // because inits can use data-send
        // this.loadReceivers();
        // this.init();
        // this.addIds();
        // this.addEventListeners();
      });
    } else {
      console.error("Missing data-wires attribute");
    }
    */
  }

  assembleErrorText(content) {
    return content.join('\n\n')
  }

  assembleErrorHelpText(err) {
    const out = []
    err.help.forEach((options, index) => {
      if (err.help.length === 1) {
        if (index === 0) {
          out.push('RECOMMENDATION')
        }
        out.push(this.assembleErrorText(options))
      } else {
        if (index === 0) {
          out.push('RECOMMENDATION OPTIONS')
        }
        options.forEach((option, optionIndex) => {
          if (optionIndex === 0) {
            out.push(`${index + 1}. ${option}`)
          } else {
            out.push(option)
          }
        })
      }
    })
    const text = this.assembleReplacedErrorText(err, out.join('\n\n'))
    err.output.push(text)
  }

  assembleReplacedErrorText(err, content) {
    return content
      .replaceAll('__UUID__', this.dataset.uuid)
      .replaceAll('__ERROR_ID__', err.id)
      .trim()
  }

  assembleErrorFinding(err) {
    const out = []
    out.push(`FINDING THE ERROR`)
    out.push(
      `Error consoles generally report lines numbers that an error occured on. The first number is the line where the 'console.error()' call that produced this message is. It's not usefule since it alwasy fires from the BittyJS class 'error()' method.`
    )
    out.push(
      `Expand the error message in the console to see the extended error trace and associated line numbers.`
    )
    const text = this.assembleReplacedErrorText(err, out.join('\n\n'))
    err.output.push(text)
  }

  assembleErrorPrelude(err) {
    const out = []
    out.push(this.#hashString)
    out.push(`A BITTY ERROR OCCURED`)
    const text = this.assembleReplacedErrorText(err, out.join('\n\n'))
    err.output.push(text)
  }

  assembleErrorId(err) {
    const out = []
    out.push(`ERROR ID: ${err.id}`)
    out.push(this.assembleErrorText(err.kind))
    const text = this.assembleReplacedErrorText(err, out.join('\n\n'))
    err.output.push(text)
  }

  assembleErrorComponent(err) {
    const out = []
    out.push(`COMPONENT UUID`)
    out.push(
      `The 'data-uuid' attribute of the <bitty-js></bitty-js> element associated with this error is:`
    )
    out.push(this.dataset.uuid)
    out.push(
      "NOTE: 'data-uuid' attriubtes are added dynamically. They should be visible in the 'Elements' view in your browser's deverloper console."
    )
    const text = this.assembleReplacedErrorText(err, out.join('\n\n'))
    err.output.push(text)
  }

  assembleErrorElementDetails(err) {
    if (err.el !== null) {
      const out = []
      out.push('ERROR ELEMENT DETAILS')
      out.push(
        `The element with the error is a ${err.el.tagName} tag with a 'data-uuid' attribute of:`
      )
      out.push(err.el.dataset.uuid)
      const text = this.assembleReplacedErrorText(err, out.join('\n\n'))
      err.output.push(text)
    }
  }

  assemlbeErrorDescription(err) {
    const out = []
    out.push('DESCRIPTION')
    out.push(this.assembleErrorText(err.description))
    const text = this.assembleReplacedErrorText(err, out.join('\n\n'))
    err.output.push(text)
  }

  assemlbeErrorAdditionalDetails(err) {
    if (err.additionalDetails !== null) {
      const out = []
      out.push('ADDITIONAL DETAILS')
      out.push(err.additionalDetails)
      const text = this.assembleReplacedErrorText(err, out.join('\n\n'))
      err.output.push(text)
    }
  }

  assembleErrorDumpMessage(err) {
    const out = []
    if (err.el !== null) {
      out.push('ELEMENT OUTPUTS')
      out.push(
        'Dumps of the <bitty-js></bitty-js> element and the element passed to the error function are in follow up console messages below.'
      )
    } else {
      out.push('ELEMENT OUTPUT')
      out.push(
        'A dump of the <bitty-js></bitty-js> element is in a follow up console message below.'
      )
    }
    const text = this.assembleReplacedErrorText(err, out.join('\n\n'))
    err.output.push(text)
  }

  error(id = 0, el = null, additionalDetails = null) {
    let err = this.#errors.find((err) => {
      return err.id === id
    })
    if (err === undefined) {
      err = this.#errors.find((err) => {
        return err.id === 1
      })
    }
    err.el = el
    err.additionalDetails = additionalDetails
    err.output = []
    this.assembleErrorPrelude(err)
    this.assembleErrorFinding(err)
    this.assembleErrorDumpMessage(err)
    this.assembleErrorId(err)
    this.assembleErrorComponent(err)
    this.assembleErrorElementDetails(err)
    this.assemlbeErrorDescription(err)
    this.assemlbeErrorAdditionalDetails(err)
    this.assembleErrorHelpText(err)
    console.error(err.output.join(`\n\n${this.#hashString}\n\n`))
    console.error(this)
    if (el !== null) {
      console.error(el)
    }
  }

  handleChange(event) {
    if (event.target === undefined || event.target.dataset === undefined) {
      return
    }
    if (event.target.dataset.c !== undefined) {
      this.runFunctions(event.target.dataset.c, event)
    }
    if (event.target.dataset.b !== undefined) {
      const batch = this.wires.batches[event.target.dataset.b].join('|')
      this.sendUpdates(batch, event)
    }
    if (event.target.dataset.s !== undefined) {
      this.sendUpdates(event.target.dataset.s, event)
    }
  }

  init() {
    this.wires.bridge = this
    if (this.wires.template !== undefined) {
      const skeleton = document.createElement('template')
      skeleton.innerHTML = this.wires.template()
      this.append(skeleton.content.cloneNode(true))
      this.loadReceivers()
    }
    if (this.wires.init !== undefined) {
      this.wires.init()
    }
    if (this.dataset.call !== undefined) {
      this.runFunctions(this.dataset.call, null)
    }
    if (this.dataset.send !== undefined) {
      this.sendUpdates(this.dataset.send, null)
    }
    if (this.dataset.batch !== undefined) {
      const batch = this.wires.batches[this.dataset.batch].join('|')
      this.sendUpdates(batch, null)
    }
    if (this.dataset.listeners !== undefined) {
      this.#listeners = this.dataset.listeners.split('|')
    }
  }

  isIgnored(name) {
    if (this.dataset.ignore === undefined) {
      return false
    }
    return this.dataset.ignore.split('|').includes(name)
  }

  loadReceivers() {
    debug('loading receivers')
    this.#receivers = []
    const els = this.querySelectorAll(`[data-r]`)
    els.forEach((el) => {
      el.dataset.r.split('|').forEach((key) => {
        this.addReceiver(key, el)
      })
    })
  }

  runFunctions(stringToSplit, event) {
    stringToSplit.split('|').forEach((f) => {
      if (this.isIgnored(f) === false) {
        try {
          this.wires[`_${f}`](event)
        } catch (error) {
          console.log(error)
          console.error(`Tried: _${f}`)
        }
      }
    })
  }

  sendUpdates(updates, data) {
    updates.split('|').forEach((key) => {
      if (this.isIgnored(key) === false) {
        this.#receivers.forEach((receiver) => {
          if (receiver.key === key) {
            receiver.f(data)
          }
        })
      }
    })
  }

  setId() {
    const uuid = self.crypto.randomUUID()
    debug(`Setting bitty-js ID to: ${uuid}`)
    this.dataset.uuid = uuid
  }

  setIds() {
    const selector = ['r', 'c', 's', 'call', 'send', 'b', 'batch']
      .map((key) => {
        return `[data-${key}]`
      })
      .join(',')
    const els = this.querySelectorAll(selector)
    els.forEach((el) => {
      if (el.dataset.uuid === undefined) {
        const uuid = self.crypto.randomUUID()
        debug(`Setting ${el.tagName} ID to: ${uuid}`, el)
        el.dataset.uuid = uuid
      }
    })
  }
}

customElements.define('bitty-js', BittyJs)

/* *************************************************
 *
 * MIT License
 * https://bitty-js.alanwsmith.com/
 *
 * Copyright (c) 2025 Alan W. Smith
 *
 * Permission is hereby granted, free of charge, to
 * any person obtaining a copy of this software and
 * associated documentation files (the "Software"),
 * to deal in the Software without restriction,
 * including without limitation the rights to use,
 * copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is
 * furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice, this permission
 * notice, and this ID (2y1pBoEREr3eWA1ubCCOXdmRCdn)
 * shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
 * OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * ****************************************************/
