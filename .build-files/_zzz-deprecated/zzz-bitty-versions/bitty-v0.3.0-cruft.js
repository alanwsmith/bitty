// This is stuff that's been removed from 0.3.0. 
// Holding it here to make sure it's not needed.
//
// This file can be erased when 0.3.0 is finalized. 


    // NOTE: DEPRECATE when v0.3.0 launches
    // TODO: Probably deprecate this template process.
    // The expecation being that the page itself is
    // responsible for setting things up.
    // At a minimum, combine the init() and template()
    // calls into a single thing so there's 
    // less overhead. Also, better to use
    // a template element regardless
    // if (this.widget.template !== undefined) {
    //   const skeleton = document.createElement("template");
    //   skeleton.innerHTML = this.widget.template();
    //   this.append(skeleton.content.cloneNode(true));
    //   this.setIds();
    //   this.loadReceivers();
    //   this.loadWatchers();
    // }




    // NOTE: DEPRECATE when v0.3.0 launches
    // TODO: Probably deprecate this in favor of 
    // issuing a data-call from the bitty-2-0 
    // element. That's more visible, explicit, 
    // and requires less mental overhead.
    // TODO: Actually, probably remove init()
    // and just use class constrotor methods
    // if (this.widget.init !== undefined) {
    //   this.widget.init();
    // }



    // TODO: Remove this if it's not necessary
    // for watchers at the individual element
    // level (it was originally for a single
    // watcher at the bitty-2-0 elemenet level)
    // GOAL: Identify signals to watch from 
    // child elements to allow sending signals
    // up the tree
    // if (this.dataset.watch) {
    //   this.#watch = this.dataset.watch.split("|");
    // }





  /*
  // TODO: Deprecate after completing 0.3.00
  //
  // addIds() {
  //   debug("Adding IDs");
  //   if (this.dataset.uuid === undefined) {
  //     this.dataset.uuid = self.crypto.randomUUID();
  //   }
  //   const els = this.querySelectorAll(`[data-r], [data-s], [data-c]`);
  //   els.forEach((el) => {
  //     if (el.dataset.uuid === undefined) {
  //       el.dataset.uuid = self.crypto.randomUUID();
  //     }
  //   });
  // }
  */


  // TODO: This is out for now. Probably DEPRECATE, but think
  // about it a little more first.
  // assembleErrorFinding(err) {
  //   const out = []
  //   out.push(`FINDING THE ERROR`)
  //   out.push(
  //     `Error consoles generally report lines numbers that an error occurred on. The first number is the line where the 'console.error()' call that produced this message is. It's not useful since it always fires from the BittyJS class 'error()' method.`
  //   )
  //   out.push(
  //     `Expand the error message in the console to see the extended error trace and associated line numbers.`
  //   )
  //   const text = this.assembleErrorReplacedText(err, out.join('\n\n'))
  //   err.output.push(text)
  // }

  // TODO: Deprecate in favor of moving the messages into COMPONETN UUID and the ELEMENT Section
  // assembleErrorDumpMessage(err) {
  //   const out = []
  //   if (err.el !== null) {
  //     out.push('ELEMENT OUTPUTS')
  //     out.push(
  //       'Dumps of the <bitty-2-0></bitty-2-0> element and the element passed to the error function are in follow up console messages below.'
  //     )
  //   } else {
  //     out.push('ELEMENT OUTPUT')
  //     out.push(
  //       'A dump of the <bitty-2-0></bitty-2-0> element is in a follow up console message below.'
  //     )
  //   }
  //   const text = this.assembleErrorReplacedText(err, out.join('\n\n'))
  //   err.output.push(text)
  // }


  // TODO: Deprecate after completing 0.3.0
  // assembleErrorPrelude(err) {
  //   const out = []
  //   out.push(this.#hashString)
  //   out.push(`A BITTY ERROR OCCURRED`)
  //   const text = this.assembleErrorReplacedText(err, out.join('\n\n'))
  //   err.output.push(text)
  // }


  // DEPRECATED as of 0.3.0
  // isIgnored(name) {
  //   if (this.dataset.ignore === undefined) {
  //     return false;
  //   }
  //   return this.dataset.ignore.split("|").includes(name);
  // }

