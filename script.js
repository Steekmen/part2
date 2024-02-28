const funnyElement = document.querySelector('#funny')
const interestingElement = document.querySelector('#interesting')
const twistedElement = document.querySelector('#twisted')
const jokeElement = document.querySelector('#joke')

function animate() {
    funnyElement.classList.add('animate__slideInLeft')
    interestingElement.classList.add('animate__slideOutDown')
    twistedElement.classList.add('animate__slideOutUp')
    jokeElement.classList.add('animate__slideOutUp')
    setTimeout(() => {
        funnyElement.classList.remove('animate__slideInLeft')
        funnyElement.classList.add('animate__slideOutLeft')
        interestingElement.classList.remove('animate__slideOutDown')
        interestingElement.classList.add('animate__slideInUp')
        twistedElement.classList.remove('animate__slideOutUp')
        twistedElement.classList.add('animate__slideInDown')
        jokeElement.classList.remove('animate__slideOutUp')
        jokeElement.classList.add('animate__slideInDown')
    }, 1000)

    setTimeout(() => {
        funnyElement.classList.remove('animate__slideOutLeft')
        interestingElement.classList.remove('animate__slideInUp')
        twistedElement.classList.removemove('animate__slideInDown')
        jokeElement.classList.remove('animate__slideInDown')
    }, 2000)
}

setInterval(animate, 2000)


const cards = document.querySelectorAll('.card')
cards.forEach(flip => {
    flip.addEventListener('click', () => {
        flip.classList.toggle('animate__flipInY')
    })
})