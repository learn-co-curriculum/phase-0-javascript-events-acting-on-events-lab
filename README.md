# Moving Things with JavaScript by Acting on Events

## Learning Goals

- Practice moving elements on the page
- Demonstrate how to move an element in response to a browser event
- Demonstrate how to update an element's position on the page

## Introduction

Think back to the first video game you played.

Think about the mechanics of that game. By _tilting_ or _pressing_ it responded to
your whims. It pulled you
into its story by giving you a window into its world and a way of interacting
with — shaping, even — that world. When you performed an ***event***, the
computer made the world respond: the little plumber from
Brooklyn jumped (_Super Mario Franchise_), the undead warrior slashed at an evil foe (_Dark Souls_), or the banana-yellow
guy ate the power pellet (_Pac-Man_).

![Controlling classic video game characters Mario and Pacman](https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-acting-on-events/Image_36_VideoGame.png)

_Programming means that you can create such a world for other people._ Sure,
it'll be a while before you're ready to build something like one of the classic games above,
but we can start with the essential steps. Let's
learn how to move things on a page in response to an _event_.

## Practice Moving Elements on the Page

Open up `index.html` in your favorite browser (we'll be using Chrome). Open the
console, and let's get a hold of what we're calling the "dodger":

```javascript
let dodger = document.getElementById("dodger");
```

Awesome. Now let's change its color:

```javascript
dodger.style.backgroundColor = "#000000";
```

Whoa, where'd it go? Well, we changed the color to `#000000`, another way of
expressing "black." So it just blends in with the background.

Let's change it to something more visible.

```javascript
dodger.style.backgroundColor = "#FF69B4";
```

Awesome!

![pink dodger](https://curriculum-content.s3.amazonaws.com/skills-based-js/pink_dodger.png)

What have we been doing here? Well, we've been accessing the `style` property of
the `dodger` element. This lets us change things like the `backgroundColor`, the
`height`, `width`, etc.

We can also, it turns out, change an element's position on the page.

To start, let's read out the element's coordinates — we'll read these as if the
bottom left of the black box were at coordinate (0, 0).

```javascript
console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); // "0px"
```

So the dodger's bottom left edge is currently at (180, 0). (Keep in mind that
these coordinates are relative to the black box.)

Let's start by moving the element up.

```javascript
dodger.style.bottom = "100px";
```

Whoa!

![up 100px](https://curriculum-content.s3.amazonaws.com/skills-based-js/pink_dodger_bottom_100.png)

Notice the annoying thing about this, though: even though we're talking about
_numeric_ coordinates, we need to move the dodger by assigning it a different
string. Let's return it to where we started:

```javascript
dodger.style.bottom = "0px";
```

That's better!

## Demonstrate How to Move an element in response to a browser event

Remember event listeners? Turns out, we can use those to respond to an event and
move the dodger.

Let's say we want to move the dodger to the left. First we have to figure out what
code is used to identify the left arrow key. We could look it up, but we're
programmers — let's explore!

```javascript
document.addEventListener("keydown", function(e) {
  console.log(e.key);
});
```

Entering the above in our console, if we now click on the window (where the
dodger is rendered) and press the left arrow key, we should see our console
log `ArrowLeft` events. You can try it with other keys (`Shift`, `Control`,
`ArrowRight`, etc.).

Let's start moving left then:

```javascript
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});
```

So what are we doing here? Well, if we catch a left arrow keydown, we move the
dodger 1 pixel to the left. (We have to parse the pixels as integers and then
convert them back to the pixel string.) Otherwise (if it's not a left arrow
keydown), we do zilch. Try it out in the browser yourself!! (Be sure to refresh the page first)

But you'll notice that, even though we're currently going one pixel at a time,
eventually our dodger will zoom (well, relatively speaking) right out of view.

How can we prevent this? Well, we want to check to see where the left edge of
the dodger is, and we want to prevent it from going past the left edge of the
black screen.

## Demonstrate how to update an element's position on the page

It seems like it's time to break the dodger's movement out into a separate
function. First, let's refresh the page and code with a blank slate.

Then let's grab the dodger again

```javascript
let dodger = document.getElementById("dodger");
```

and work on that function:

```javascript
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
```

We're doing essentially the same as above, but we first ensure that the dodger's
left edge has not gone past the left edge of its container. (Remember, position
is relative to the container.)

Let's wire this up

```javascript
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
```

Now try moving the dodger past the left edge. No can do!

We have not yet implemented moving the dodger to the right. Can you do it? With
the code implemented from the code along, think about what needs to change to
make a `moveDodgerRight()` function. We'll need another `e.key` in the event
listener, and instead of moving the dodger `${left - 1}px`, we'll be moving it
`${left + 1}px`.

Challenge: How can you prevent the dodger from escaping off the right-hand side?
Perhaps there are certain restrictions you'd want to put in place.

## Lab

Complete the work to get the tests to pass and then "try out" your application. Make
sure the application works in the browser the way you expect. In professional applications,
tests can't cover 100% of the use of the application. It's important to realize that
"passing all the tests" _is not the same_ as "a working application."

Be sure to do a human-level manual "play through" with your dodger to make sure your
working code _really works_!

![Passing the Tests is only part of the job](https://media.giphy.com/media/vvLWidwZNYH5e/200w_d.gif)

## Conclusion

Events and event handling are vital to web programming. JavaScript allows for
dynamic page rendering, and users can interact with the contents of the page in
real time. With knowledge of these basic techniques, you'll become comfortable
working with more complex interactions like those in video games that you may
have played or seen before!
