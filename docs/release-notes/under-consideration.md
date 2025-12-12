## Under Consideration


- TODO: Examine test 1060 to see about the bitty 
element picking up event when other bitty element
that are siblings get clicked. 

- TODO: Figure out how to make a better error message if there's
a major problem in a module file that prevents it from loading
all together. For example, an open `const problemVar =` with
nothing after the `=` sign. Right now, it just says there's
an error from inside bitty's component with no useful 
info about where the error actually occurred. 

- TODO: Added a `bittyready` signal that fires
at the end of a bitty element's initialization
chain. 

- TODO: CONSIDER: `.addDataSend(someEl, SIGNALS)` 
and `.addDataReceive(someEl, SIGNALS)` 
which would let you update an existing elements
`data-send` and `data-recieve` with new signals
(creating the attributes if they don't already exist)
Example: `this.api.addDataReceive("signal", codeBlock);`

    Existing signals would remain on the elements. 

- TODO: CONSIDER: `.removeDataSend(someEl, SIGNALS)`
and `.removeDataReceive(someEl, SIGNALS)` which take
signals off the respective `data-*` attributes. 
    
    Multiple signals can be removed. 

    It's not necessary to add `await:` on the
    removal for a signal. Only the name
    is required. If the source signal has
    an await it gets removed regardless. 

- TODO: CONFIRM UPDATE: Added `internal` comments 
to `ev.sendPayload` to filter it out of the 
`jsdoc` output for auto generating docs. 

- TODO: Added `this.api.getQuickXXX()` 
methods that correspond to `this.api.getXXX()`
methods. The difference is that they
return a payload regardless of if the
fetch fails or not. If the fetch 
succeeds, it's returned directly. If
it fails, an alternate error payload
is returned along with an error message
that goes to the console. 

- TODO: Added `this.api.getCSS()` which is just an
alias to `this.api.getTXT()` but helps with the
mental model that fits with the other `this.api.getXXX()`
methods. 

- TODO: Added a feature to the subs for `this.api.getXXX`
where if the first value is a string it just
alternates the subs without having to do
a nested array. 

- TODO: Added `this.api.localForward(EVENT, SIGNAL)` which only 
forwards inside the current module in the
same way `this.api.localTrigger(SIGNAL)`
works. 

- TODO: Added `el.setProp(KEY, VALUE)` which 
is shorthand for adding a corresponding 
`data-KEY` attribute to the `VALUE`
to the element. 

- TODO: CONSIDER: Added `ev.setProp(KEY, VALUE)` which 
is shorthand for adding a corresponding 
`data-KEY` attribute to the `VALUE`
to the `event.target`. (This would 
keep the APIs consistent, but need
to thing through the implication of
adjusting the `.target`)

- TODO: CONSIDER: Added `ev.sender.setProp(KEY, VALUE)` which 
is shorthand for adding a corresponding 
`data-KEY` attribute to the `VALUE`
to the `event.sender`. (This would 
keep the APIs consistent, but need
to thing through the implication of
adjusting the `.sender`)

- TODO: CONFIRM: Documented behavior of `el.bittyId`
if the element was added outside the
`this.api...` methods (i.e. that
`.bittyId` properties are only added when
elements and fragments are created 
via `this.api...` methods. Anything
created with `document.createElement()`
won't get them automatically)


- TODO: Make stress test pages with
nesting, large numbers of elements, updates, etc...

- TODO: Set up `data-init` to handle `await:SIGNAL`
instead of just doing an `await` if the
function is `async` (which is what happens
now)

- Investigate adding all the `bittyId` and `.sender` stuff
to empty bitty elements that just make 
a connection and populate themselves from 
`bittyInit` or `bittyReady`


- TODO: Generate sha hashes of files and check them
before deployments to make sure they haven't changed.

- TODO: Make sure that `bittyforward`, `bittertrigger`, etc...
events have `.valueXXX`, `.propXXX`, etc.. stuff on them so 
they can be used interchangably with other events. 

- TODO: Set up `.trigger`, `.localTrigger`, `.forward`, 
and `.localForward` to be able to pass data like:
`this.api.trigger("SIGNAL_NAME", { some: "data" })`

- TODO: Improve connection error messages

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

- TODO: CONSIDER: Add console log message if a signal 
is sent that doesn't have a corresponding function
to handle it. (This probably doesn't make sense
as signals can travel between bitty elements
so the source element might not have a
function that corresponds to a signal it sends).

- TODO: Add disconnectedCallback() to do cleanup
if a bitty element is removed. 


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

- TODO: Consider a list capture method. 
e.g. you can grab all the elements
with a given parameter and they
show up in the order
they appear in the DOM. 
