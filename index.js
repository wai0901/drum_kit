var nthOfButtons = document.querySelectorAll(".drum").length;

for (var i =0; i < nthOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function() {
        makeSound(this.innerHTML);
        soundsAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    soundsAnimation(event.key);
});

const makeSound = (key) => {
    switch (key){
        case "w":
            var audios = new Audio("sounds/tom-1.mp3");
            audios.play();
        break;
        case "a":
            var audios = new Audio("sounds/tom-2.mp3");
            audios.play();
        break;
        case "s":
            var audios = new Audio("sounds/tom-3.mp3");
            audios.play();
        break;
        case "d":
            var audios = new Audio("sounds/tom-4.mp3");
            audios.play();
        break;
        case "j":
            var audios = new Audio("sounds/snare.mp3");
            audios.play();
        break;
        case "k":
            var audios = new Audio("sounds/crash.mp3");
            audios.play();
        break;
        case "l":
            var audios = new Audio("sounds/kick-bass.mp3");
            audios.play();
        break;

    default:
    }
}

const soundsAnimation = (currentKey) => {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
};






