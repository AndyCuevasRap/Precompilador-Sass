const headerToggle = document.getElementById('header')
main = document.getElementById('main')
navClose = document.getElementById('nav-close')

if (headerToggle) {
    headerToggle.addEventListener('click', () => {
        main.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        main.classList.remove('show-menu')
    })
}

const navLink = document.getElementById('nav__link')

const linkAction = () => {
    const main = document.getElementById('main')
    main.classList.remove('show-menu')
}

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



const sections = document.querySelectorAll('section[id]')

const scrollActivate = () => {
    const scrollY = window.pageYOffset

    sectionsforEach(current => {
        const sectionHeight = current.offssetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*-' + sectionId + ']')

        if (scrollY > sectioTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClassClass.classList.remove('active-link')
        }
    })
}