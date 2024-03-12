let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

let set = false

function displayStart() {
    valueDisplays.forEach((valueDisplay) => {
        let start = 0
        let end = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval/end);
        let counter = setInterval(function() {
            start += 1;
            valueDisplay.innerHTML = start;
            if (start == end){
                clearInterval(counter);
            }
        },duration);
    });
}

function isInView(el){
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const box = document.querySelector('.project-counter');

window.addEventListener('load',function() {
    // Only start counter if the condition is not met and set condition to true
    if(set == false){
        displayStart()
        set = true
        console.log('Condition Set')
    }
});