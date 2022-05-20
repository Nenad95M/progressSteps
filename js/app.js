//globalno definisana sirina progressa
let width = 0;
const circles = document.querySelectorAll('.circle');
let currentActive = 1;

//uvecanje progresa
document.getElementById('next').addEventListener('click', function () {
    if (currentActive != 4) {
        circles[currentActive].classList.add('active');
        currentActive++;
    }
    // console.log(currentActive);
    if (width !=99) {
        width += 33;
        changeProgress(width);
    }
})

//umanjenje progresa
document.getElementById('prev').addEventListener('click', function () {
    if (currentActive != 1) {
        currentActive--;
        circles[currentActive].classList.remove('active');
    }
    // console.log(currentActive);
    if (width != 0) {
        width -= 33;
        changeProgress(width);
    }
})

//funkcija koja menja sirinu progresa
function changeProgress(widthSize) {
    document.querySelector('.progress').style.width = `${widthSize}%`;
}

