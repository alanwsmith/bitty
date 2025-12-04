- This example shows how to keep track of 
values (aka maintaining state). 

- The `window.ClickCounter` class defines
a [private field variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements#private_fields)
named `#counter` to keep track of the 
number of clicks. 

- Each time the button is used the 
[! filter highlight_javascript !]this.#counter += 1;[! endfilter !][@ ' ' @]
lines adds one to the [! filter highlight_javascript !]#coutner[! endfilter !]. 

- Then, the <inline-code>[! filter highlight_javascript !]el.innerHTML ...[! endfilter !]</inline-code> line displays update
the button with the new value. 


