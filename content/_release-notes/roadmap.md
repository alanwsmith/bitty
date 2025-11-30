## Roadmap 

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


