- `bitty-COMPONENT_VERSION` elements the nest other 
`bitty-COMPONENT_VERSION` elements send signals to the
children. The example above shows how the
`update` signal is sent from the Parent
element to the Child elements. 

Each element maintains its own instance
of the `#value` counter. When the Child
buttons are clicked their display shows
their individual status. 

When the Parent button is clicked, it's
output goes to itself as well as the
child elements. 

Said another way, signals travel down
the DOM tree to children. But, it 
won't travel up to ancestors or 
to siblings on the sides.