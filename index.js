const box = document.querySelector('.box');
const btnHorizontal = document.querySelector('.horizontal');
// const btnVertical = TODO 1: finish this selector

/**
 * Box click handler.
 * A function that gers called every time a user clicks on the box,
 * it checks to see if the box has the class of big, if yes it removes is and sets the inner text
 * to `Make me bigger` otherwise it adds the big class and changes the text to make me smaller.
 */
function boxClickHandler () {
  if (box.classList.contains('big')) {
    box.classList.remove('big');
    box.textContent = 'Make me bigger';
  } else {
    box.classList.add('big');
    box.textContent = 'Make me smaller';
  }
}

function horizontalClickHandler () {
  // TODO 2: finish horizontalClickHandler that toggles the text on the `btnHorizontal` button and toggles the left class on the box.
}


// TODO 3: Wrote the verticalClickHandler that toggles the text on the `btnVertical` button and toggles the bottom class on the box.

box.addEventListener('click', boxClickHandler);
btnHorizontal.addEventListener('click', horizontalClickHandler);
// TODO 4: bind the btn vertical to the new verticalClickHandler.
