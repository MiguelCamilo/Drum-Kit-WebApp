// using .addEvenListner to push a response from the mouse event
// in this case we return the click str in the EventListner
// after the click "type" we add a "listner" which would be our func
// being called

// the condition of the for loop is checking for the amount of elements
// with the class of "drum", and using .length allows us to retrive the amount
// of classes we
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  // we then store the amount of elements we have with the class of "drum" and
  // store it in "i"
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this stores the value of the button that is clicked within in the var
    let buttonInner = this.innerHTML;

    makeSound(buttonInner);
    buttonAnimation(buttonInner);
  });
}

// using the parameter inside of the func() "event" allows us to tap into
// the event that triggered the keydown or which ever key is pressed  
document.addEventListener("keydown", function (event) {  // the parameter can be called anything
    makeSound(event.key);
    buttonAnimation(event.key);
})

// this function is being sent data from both func's above, checking for keyboard press and button 
// press
function makeSound(key) {
    // this switch takes the stored value in the var and allows us to play a
    // sound depending on which value / key is stored
  switch (key) {
    case "w":
      // when declaring a var, the .play() has to match the same var
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default: console.log(buttonInner);
  }
}

function buttonAnimation(currentKey) {
  // adding the event to be called allows
  // us to grab the class of the key that was pressed
  let activeKey = document.querySelector("." + currentKey);
  // this adds the exisitng class in the CSS file to the 
  // key that is pressed
  activeKey.classList.add("pressed");

  // this func adds a delay after the css class gets added to 
  // the pressed key then removes the css class
  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);
}