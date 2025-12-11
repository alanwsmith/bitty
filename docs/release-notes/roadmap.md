## Roadmap 

- TODO: Consider: `.appendDataSend(someEl, SIGNALS)` and `.appendDataReceive` 
which would let you update an existing elements
`data-send` and `data-recieve` with new signals
(creating the attributes if they don't already exist)
Example: `this.api.addDataReceive("signal", codeBlock);`

- TODO: Example test 1060 to see about the bitty 
element picking up event when other bitty element
that are siblings get clicked. 

- TODO: Add `internal` comments to `ev.sendPayload` 
so it can be filtered in the jsdoc data. 

- TODO: Set up `data-init` to handle `await:SIGNAL`
isntead of just doing an `await` if the
function is `async` (which is what happens
now)

- Investigate adding all the `bittyId` and `.sender` stuff
to empyt bitty elements that just make 
a connection and populate themselves from 
`bittyInit` or `bittyReady`



- TODO: Implement: `this.api.getQuickXXX()` 
methods. (stubs are already in place).

- TODO: Add `this.api.getCSS` which is just an
alias to `this.api.getTXT` but helps with the
mental model that fits with the other `.getXXX`
methods. 

- TODO: Generate sha hashes of files and check them
before deployments to make sure they haven't changed.

- TODO: Make sure that `bittyforward`, `bittertrigger`, etc...
events have `.valueXXX`, `.propXXX`, etc.. stuff on them so 
they can be used interchangably with other events. 

- TODO: Added `this.api.getQuickTXT`, `this.api.getQuickHTML`,
etc... which unwraps the response and either returns
the expected value or an error message (in an element
or fragment or SVG as expected) The idea is that
the error message would just show up directly without
you having to do anything else. (The regular
`this.api.getTXT`, etc.. give you the chance
to do something specific if an error happens)

- TODO: Added a feature to the subs for `this.api.getXXX`
where if the first value is a string it just
alternates the subs without having to do
a nested array. 

- TODO: Investigate `.localForward` which only 
forwards inside the current module

- TODO: Set up `.trigger`, `.localTrigger`, `.forward`, 
and `.localForward` to be able to pass data like:
`this.api.trigger("SIGNAL_NAME", { some: "data" })`

- TODO: Improve connection error messages

- TODO: Make md5 hashes of files and check them
before deployment. 

- TODO: make sure to clean up event listeners
when bitty elements are removed from the page. 

- TODO: consider if `data-init` should fire
on elements added through `this.api` .
Current thinking is 'no' because there's
not a good way to know where it's gonna
be on the DOM:

```
<script>
  window.BittyClass = class {
    example(ev, el) {
      const e = this.api.makeElement('<div data-init=exampleInit>ONE</div>');
      document.getElementById('test').appendChild(e);
    }

    exampleInit(ev, el) {
      el.innerHTML = 'TWO';
    }
  }
</script>

<bitty-7-0>
  <button data-send='example' data-receive='example'>Click me</button>
</bitty-7-0>

<div id='test'>Waiting</div>
```



- TODO: Consider adding a setter/updater
for dataset (e.g. `el.setDs("KEY", "VALUE"))

- TODO: set up async/await so that anything
that happens with .forward, .trigger, or
.localTrigger inside a specific bitty
tag uses await properly? not sure about
this since there's no practical way to
deal with awaiting from other elements. 

  TODO: Ensure that anything using
  `async/await` directly from `data-send`
  `awaits` properly. 


- TODO: Examine if there's a way to guarantee
that each import only happens once even if
multiple bitty instances call the same
external module file. 

- TODO: Set up so that `data-connect` can use
relative file paths (e.g. `./here.js`)
instead of being limited to `http` and `/`
urls. 

- TODO: Add console log message if a signal is
sent that doesn't have a corresponding function
to handle it. 

- TODO: Add disconnectedCallback() to do cleanup
if a bitty element is removed. 

- TODO: Make stress test pages with
nesting, large numbers of elements, updates, etc...

- TODO: Consider: Adding `this.api.makeSVG()`
like `this.api.getSVG()` with all the
replacement stuff. 

- TODO: Consider: adding the state object that
has built-in `.isReady()` promise check. 
(Thinking about this a little more, I'm not
sure it makes sense for direct integration
because loading the data will be so
application specific.)


- TODO: Investigate: Added a `disconnectedCallback()`
to clean up anything that can be
removed when a component is removed.

- TODO: Set up the `bitty` tag to listen
for signals with `data-receive` to allow
for things like completely switching out
the contents of the component without
having to rely on a child element calling
`.parentNode`. 

- TODO: Make sure to cover the removal of
elements and make sure listeners don't
explode. 

- TODO: Document behavior of `el.bittyId`
if the element was added outside the
`this.api...` methods and doesn't have an
id. 


- TODO: Consider a list capture method. 
e.g. you can grab all the elements
with a given parameter and they
show up in the order
they appear in the DOM. 
