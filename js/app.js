console.log('array carousel')

// creare un array con le immagini da inserire nella gallery
const imagesArray = [
    '../img/01.webp',
    '../img/02.webp',
    '../img/03.webp',
    '../img/04.webp',
    '../img/05.webp',
]
console.log(imagesArray)

// recuparare da DOM l'elemento con classe .gallery
const galleryDOMElement = document.querySelector('.gallery')
console.log('elemento con classe gallery', galleryDOMElement)

// creare un ciclo for per definire la "posizione" delle immagini nell'array e inserirle nell'html
for (let i = 0; i < imagesArray.length; i++) {
    console.log(imagesArray[i])
}