Signals the child element receive.

Availability: `<[@ config.tag_name @]>` elements: no - child elements: yes 

Defines the signals that an element listens
for. A single signals is set like this:

    data-receive="alfa"

An element can listen for multiple signals
with a pipe (`|`) separated list:

    data-receive="bravo|charlie"

Whenever an event triggers a signal 
with a `data-send` attribute that matches
a `data-receive` signal name value
the element is sent through the corresponding
method in the class the bitty component
is using for functionality. 

Listening for signals is set up with
`document.addEventListener()` for 
each event type that's being listened
for. 
