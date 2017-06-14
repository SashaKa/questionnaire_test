const burger = document.querySelector( '.menu__mobile-logo')
const mobileMenu = document.querySelector('.menu__list-mobile')

burger.addEventListener('click' , () => {
    if(!burger.classList.contains('menu-on')) {
        burger.classList.add('menu-on')
        mobileMenu.classList.add('show-menu')
    } else if (burger.classList.contains('menu-on')) {
        burger.classList.remove('menu-on')
        mobileMenu.classList.remove('show-menu')
    }
})

const sliderElem = document.getElementById('slider')
const thumbElem = sliderElem.children[0]

    thumbElem.onmousedown = function(e) {
      const thumbCoords = getCoords(thumbElem)
      const shiftX = e.pageX - thumbCoords.left
      const sliderCoords = getCoords(sliderElem)

        document.onmousemove = function(e) {
        const newLeft = e.pageX - shiftX - sliderCoords.left

        
        if (newLeft < 0) {
          newLeft = 0
        }
        const rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth
        if (newLeft > rightEdge) {
          newLeft = rightEdge
        }

        thumbElem.style.left = newLeft + 'px'
    }

    document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null
    }
      return false 
    }

    thumbElem.ondragstart = function() {
      return false
    }

    function getCoords(elem) { 
    const box = elem.getBoundingClientRect()
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      }
    }