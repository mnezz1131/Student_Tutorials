// this is for coding quiz exercise. creating a timer

var currentTime = 300
var startButton = document.getElementById("#startButton")


function startQuiz() {
    setInterval(function () { decreaseOneSecondInTime() }, 1000);

    //write the code to hide start screen div

    // query document for div and save to variable
    var startScreen = document.getElementById("startScreen")
    // use js setAtrribute to set the class name to hide
    startScreen.setAttribute('class', 'hide')
}

function decreaseOneSecondInTime() {
    // currentTime = currentTime - 1
    currentTime -= 1
    console.log(currentTime)
}

startQuiz()

// look up javascript event types


// add event listener expects two parameters. ('event type', function)
startButton.addEventListener('click', startQuiz)


