Signals to send when an event fires
on an element with the attribute. 

Availability: `<[@ config.tag_name @]>` elements: yes - child elements: yes 

A single named signal is set like this:

    data-send="alfa"

Multiple signals can be set on the same
event with a pipe (`|`) separated list

    data-send="bravo|charlie"

Signals are sent all the way 
to the DOM root. Any component 
on the page has access to all of them. 
If multiple components are on the
page they can respond to signals
from each other. Isolating components
from each other is done by 
ensuring names don't overlap. 
