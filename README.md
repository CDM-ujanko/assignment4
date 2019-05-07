# Assignment 4 - Events

Monday May 13<sup>th</sup> 5:45 PM

For this assignment you will write two functions and make them click handlers for the horizontal and vertical buttons.
The box on the screen has a click handler attached to it, once you click on it, it will check the current classes and add
or remove the `big` class.

All the animation is done via css, the `magic` happens on line 13 in `index.css`. Css automatically creates a transition
when the new class is applied.

You need to create two more handlers, one for the horizontal and one for the vertical button, the horizontal should toggle
the `left` class on the box and the text from `Go Left` to `Go Right`. The vertical should to the same thing but it needs to
toggle the `bottom` class and the `Go Low` and `Go High` text.

Note: You can use jQuery if you want, but you do not have to.

## Before starting the assignment make sure that:
<ul>
    <li>Accept the assignment 4.</li>
    <li><b>CLONE</b> your assignment repo to your computer. (When cloning there is no need to set upstream)</li>
    <li>The only thing you need to do is <code>git clone URL-OF-REPO</code> into the folder where you want the repo.</li>
</ul>

## In order to receive full credit you must make sure that:
<ul>
    <li>Make sure you are not coding blind, open the developer console.</li>
    <li>Finish the selector for btnVertical. TODO: 1</li>
    <li>Finish the `horizontalClickHandler`, it needs to toggle the text from `Go Left` to `Go Right` on the button and the 'left' class on the box TODO: 2</li>
    <li>Declare and finish the `verticalClickHandler`, it needs to toggle the text from `Go Low` to `Go High` on the button and the 'top' class on the box TODO: 3</li>
    <li>Update the event handlers so that the new verticalClickHandler is called whenever the user clicks on the btnVertical TODO: 4</li>
</ul>

## For extra credit (2 points):
 <ul>
    <li>Add a select box with at least 3 options in the button holder div.</li>
    <li>Make the values different colors.</li>
    <li>Create a function that will change the color of the `box` to the selected color every time a user selects it.</li>
 </ul>
