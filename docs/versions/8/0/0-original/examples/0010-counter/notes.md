## Notes

- This example shows how to keep track of 
values (aka maintaining state). 

- The `window.ClickCounter` class defines
a [private field variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements#private_fields)
named `#counter` to keep track of the 
number of clicks. 

- Each time the button is used the 
<span class="line-marker"></span><span class="source js"><span class="variable language this js">this</span><span class="punctuation accessor js">.</span>#<span class="variable other readwrite js">counter</span> <span class="keyword operator assignment augmented js">+=</span> <span class="constant numeric js">1</span><span class="punctuation terminator statement js">;</span></span> 
lines adds one to the <span class="line-marker"></span><span class="source js">#<span class="variable other readwrite js">coutner</span></span>. 

- Then, the <inline-code><span class="line-marker"></span><span class="source js"><span class="variable other object js">el</span><span class="punctuation accessor js">.</span><span class="meta property object js">innerHTML</span> <span class="punctuation accessor js">.</span><span class="punctuation accessor js">.</span><span class="punctuation accessor js">.</span></span></inline-code> line displays update
the button with the new value. 
