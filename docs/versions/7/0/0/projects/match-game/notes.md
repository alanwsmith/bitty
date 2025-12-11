#### Overview 

- This is a basic match game. Clicking or tapping on
a tile turns it over. You choose tiles in pairs. 
Tile sets are completed when you turn over
two times with the same face on a turn. 
If the second tile doesn't match the 
first, they both turn over and are hidden
again. 

- You win the game when all the pairs are matched. 

#### Bitty Details

The JavaScript for the game (shown below) 
is mostly about implementing the logic for the game itself. 
It includes tracking which tiles are turned
over, how many matches there are, how 
many turns have been taken, etc...

The logic is independent of Bitty. It
could be used anywhere. The thing
that Bitty provides is an easy way to 
connect the interactions with the 
individual tiles to the logic. Some
Bitty specific things to note:

- Each tile is made up from a `button`
that includes details in custom `data-*`
attributes. Each button is created
using the `this.api.makeHTML()` 
method. 

    Some of the `data-*` attributes
    are the same for every tile (e.g. 
    `data-use="matchGameMakePick"`). 
    Others, like `data-pair="PAIR_NUM"`
    are updated via find/replace 
    substitutions with actual 
    data when they are created. 

- The `data-state` attribute on each
tile holds it's state. The game
uses that value to determine what
content populates the tile. 

- The faces are made by combining 
two SVG images: a face and a head. 
The source collections of faces
and heads are initially loaded
from remote files with 
`this.api.getTXT()`. 
When the tiles are created the
text is turned into an SVG
with `this.api.makeSVG()`. 

    That approach means the external
    files only need to be downloaded
    once. They can be reused any
    number of times to make new 
    SVG elements. 

    (Side note, there's no 
    technical need for
    the faces and the heads to be
    separate files. That's just
    how the source images I'm 
    working with came in.)



