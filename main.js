// let count = 0;
// let disp = document.getElementById("display");
// let btn = document.getElementById("rock");

 
// btn.onclick = function () {
//             count++;
// disp.innerHTML = count;
// }

const toggleButton = document.getElementById('rock');
const other = document.getElementById('paper');
const myDiv = document.getElementById('scissor');


toggleButton.addEventListener('click', () => {
    if (myDiv.style.display === 'none') {
        myDiv.style.display = 'block';
        (other.style.display === 'none') 
            other.style.display = 'block';
    } else {
        myDiv.style.display = 'none';
        other.style.display = 'none';
    }
});




// const stoggleButton = document.getElementById('paper');
// const others = document.getElementById('rock');


// toggleButton.addEventListener('click', () => {
//     if (myDiv.style.display === 'none') {
//         myDiv.style.display = 'block';
//         (other.style.display === 'none') 
//             other.style.display = 'block';
//     } else {
//         myDiv.style.display = 'none';
//         other.style.display = 'none';
//     }
// });