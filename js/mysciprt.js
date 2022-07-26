console.log('Carosello')

// array di img 
const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

const slideElements = [];

const slidesWrapperEl = document.querySelector('.slides-wrapper');
slidesWrapperEl.innerHTML = ''

let currentIndex = 0



// generare il contenuto dello slider 
for (let i = 0; i < slides.length; i++) {

    const src = slides[i];
    // console.log(src)

    // creo li 
    const li = document.createElement('li');

    // do la classe slide a li 
    li.className = 'slide';

    // assegno alla prima slide la classe active 
    if (i === currentIndex) {
        li.classList.add('active')
    }

    // creo img 
    const img = document.createElement('img');

    // do src alla img 
    img.src = src;
    // console.dir(img)

    // aggancio img a li 
    li.append(img);


    // aggancio li al Wrapper 
    slidesWrapperEl.append(li)

    // push nell array slideElements 
    slideElements.push(li);


}
// console.log(slideElements)

// implementare freccia destra 
const nextArrowEl = document.querySelector('.arrow-next');
console.log(nextArrowEl)


// cambio  active alla slide 
nextArrowEl.addEventListener('click', function () {

    let slideAttiva = slideElements[currentIndex];
    let slideSuccessiva = slideElements[currentIndex + 1]



    // qui si torna alla prima img quando siamo arrivati alla fine 
    if (currentIndex === 4) {
        slideSuccessiva = slideElements[0];
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
        currentIndex = -1;


    } else {
        // togliere classe active dalla slide attiva 
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
    }
    currentIndex++

    console.log(slideAttiva, 'attiva')
    console.log(slideSuccessiva, 'successiva')
    console.log(currentIndex)


})