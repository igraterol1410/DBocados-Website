// FORMULARIO
var mainContainer = document.querySelector('.main-form__content'),
    formulario  = document.querySelector('.form-wrapp'),
    container   = document.querySelector('.form-content'),
    enviar      = document.querySelector('.form-button')

// CARRUSEL
var classicPic  = document.querySelector('.classic-picture'),
    thematicPic = document.querySelector('.thematic-picture'),
    dripcakePic = document.querySelector('.dripcake-picture'),
    right       = document.querySelector('.jam-arrow-circle-right-f'),
    left        = document.querySelector('.jam-arrow-circle-left-f'),
    thematicRight   = document.querySelector('.arrow-thematic-right'),
    thematicLeft    = document.querySelector('.arrow-thematic-left'),
    dripcakeRight   = document.querySelector('.arrow-dripcake-right'),
    dripcakeLeft    = document.querySelector('.arrow-dripcake-left')
    
var tresLechesImperial = `<h3 class="item-title">Tres Leches Imperial</h3>
    <p class="item-description">
    Delicioso bizcocho de vainilla humedecido con nuestra mezcla de tres leches y decorado con un rico merengue italiano y frutas.
    </p>
    <a href="/pages/order.html" class="item-link description-button"><div class="order-link">Cotizar</div></a>`
    
var tortaChocolate = `<h3 class="item-title">Torta de Chocolate</h3>
    <p class="item-description">
    Delicioso bizcocho de chocolate, relleno con ganache de chocolate, humedecido con nuestra mezcla de chocolate y decorado con ganache de chocolate o crema de mantequilla sabor a chocolate.
    </p>
    <a href="/pages/order.html" class="item-link description-button"><div class="order-link">Cotizar</div></a>`
    
var tortaArequipe = `<h3 class="item-title">Torta de Arequipe</h3>
    <p class="item-description">
    Delicioso bizcocho de vainilla, relleno con el más rico arequipe, humedecido con nuestra mezcla de vainilla y decorado con arequipe o crema de mantequilla sabor a arequipe.
    </p>
    <a href="/pages/order.html" class="item-link description-button"><div class="order-link">Cotizar</div></a>`
    
var tortaSelvaNegra = `<h3 class="item-title">Torta Selva Negra</h3>
    <p class="item-description">
    Deliciosa torta de chocolate, rellena y cubierta con crema chantillí, cubierta adicional con el mas rico chocolate nacional y decorada con crema chantillí y cerezas.
    </p>
    <a href="/pages/order.html" class="item-link description-button"><div class="order-link">Cotizar</div></a>`
    
var classicImg  = [
        {
        nombre          : '/img/classic/treslechesimperial-1.jpeg',
        description     : `${tresLechesImperial}`
        },
        {
        nombre          : '/img/classic/chocolate-2.jpeg',
        description     : `${tortaChocolate}`
        },
        {
        nombre          : '/img/classic/arequipe-1.jpeg',
        description     : `${tortaArequipe}`
        },
        {
        nombre          : '/img/classic/selvanegra-1.jpeg',
        description     : `${tortaSelvaNegra}`
        }
    ]


var i                   = 0,
    classicDescription  = document.querySelector('.classic-description')

    
    // ASIDE IMAGES
    var asideImg1    = document.getElementById('asideImg1')
    var asideImg2    = document.getElementById('asideImg2')
    var asideImg3    = document.getElementById('asideImg3')
    var asideImg4    = document.getElementById('asideImg4')
    
    // IMAGENES DE PERSONALIZADOS
    var thematicImg = [
    '/img/thematics/letter/m-1.jpeg', 
    '/img/thematics/letter/a-1.jpeg', 
    '/img/thematics/fortnite/fortnite-5.jpeg',
    '/img/thematics/fortnite/fortnite-4.jpeg',
    '/img/thematics/fortnite/fortnite-1.jpeg',
    '/img/thematics/jurassicpark-1.jpeg',
    '/img/thematics/babyshark-1.jpeg',
    '/img/thematics/bobesponja-1.jpeg',
    '/img/thematics/dinosaurios-1.jpeg',
    '/img/thematics/moana-1.jpeg',
    '/img/thematics/pawpatrol-1.jpeg',
    '/img/thematics/pawpatrol-2.jpeg',
    '/img/thematics/pepapig-1.jpeg',
    '/img/thematics/shrek-1.jpeg',
    '/img/thematics/tortugasninja-1.jpeg',
    '/img/thematics/unicornio-1.jpeg'
    ]
    
    var thematicImg1    = document.querySelector('.thematic-1'),
        thematicImg2    = document.querySelector('.thematic-2'),
        thematicImg3    = document.querySelector('.thematic-3'),
        thematicImg4    = document.querySelector('.thematic-4'),
        thematicImg5    = document.querySelector('.thematic-5'),
        thematicImg6    = document.querySelector('.thematic-6'),
        thematicImg7    = document.querySelector('.thematic-7'),
        thematicImg8    = document.querySelector('.thematic-8'),
        thematicImg9    = document.querySelector('.thematic-9'),
        thematicImg10    = document.querySelector('.thematic-10'),
        thematicImg11    = document.querySelector('.thematic-11'),
        thematicImg12    = document.querySelector('.thematic-12'),
        thematicImg13    = document.querySelector('.thematic-13'),
        thematicImg14    = document.querySelector('.thematic-14'),
        thematicImg15    = document.querySelector('.thematic-15'),
        thematicImg16    = document.querySelector('.thematic-16'),
        modalContainer   = document.querySelector('.modal-picture-container'),
        modalPicture    = document.querySelector('.modal-picture'),
        modalBg         = document.querySelector('.modal-bg'),
        modalClose      = document.querySelector('.close'),
        thematicBefore  = document.querySelector('.modal-left'),
        thematicNext    = document.querySelector('.modal-right'),
        dripcakeBefore  = document.querySelector('.modal-drip-left'),
        dripcakeNext    = document.querySelector('.modal-drip-right')
        
// VARIABLES DRIP CAKES
var dripcakeImg = [
    '/img/dripcake/babyshower-1.jpeg', 
    '/img/dripcake/drip-cake-1.jpeg',
    '/img/dripcake/drip-cake-2.jpeg',
    '/img/dripcake/drip-cake-3.jpeg',
    '/img/dripcake/drip-cake-4.jpeg',
    '/img/dripcake/drip-cake-5.jpeg',
    '/img/dripcake/drip-cake-6.jpeg',
    '/img/dripcake/drip-cake-7.jpeg',
    '/img/dripcake/drip-cake-8.jpeg'
    ]
    
    var dripcakeImg1    = document.querySelector('.dripcake-1'),
        dripcakeImg2    = document.querySelector('.dripcake-2'),
        dripcakeImg3    = document.querySelector('.dripcake-3'),
        dripcakeImg4    = document.querySelector('.dripcake-4'),
        dripcakeImg5    = document.querySelector('.dripcake-5'),
        dripcakeImg6    = document.querySelector('.dripcake-6'),
        dripcakeImg7    = document.querySelector('.dripcake-7'),
        dripcakeImg8    = document.querySelector('.dripcake-8'),
        dripcakeImg9    = document.querySelector('.dripcake-9')

        // VARIABLES PÁGINA COTIZAR

    // ACCIONES

    // ACCION FORMULARIO
    if(formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            container.classList.add('inactive')
            // console.log(event)
            mainContainer.innerHTML = `<h2 class="section-title form-title">¡Gracias, pronto estaremos en contacto!</h2>`
        })
    }

// ACCION CARRUSEL CLASICOS
if(right && left && asideImg1 && asideImg2 && asideImg3 && asideImg4) {
    right.addEventListener('click', function () {
        i++
        if(i <= classicImg.length -1) {
            classicPic.src = classicImg[i].nombre
            classicDescription.innerHTML = classicImg[i].description
        } else {
            i = 0
            classicPic.src = classicImg[i].nombre
            classicDescription.innerHTML = classicImg[i].description
        }
    })
    
    left.addEventListener('click', function () {
        i--
        if(i >= 0) {
            classicPic.src = classicImg[i].nombre
            classicDescription.innerHTML = classicImg[i].description
        } else {
            i = classicImg.length - 1
            classicPic.src = classicImg[i].nombre
            classicDescription.innerHTML = classicImg[i].description
        }
    })
    
    asideImg1.addEventListener('click', function () {
        i = 0
        classicPic.src = asideImg1.src
        classicDescription.innerHTML = `${tresLechesImperial}`
    })
    
    asideImg2.addEventListener('click', function () {
        i = 1
        classicPic.src = asideImg2.src
        classicDescription.innerHTML = `${tortaChocolate}`
    })
    
    asideImg3.addEventListener('click', function () {
        i = 2
        classicPic.src = asideImg3.src
        classicDescription.innerHTML = `${tortaArequipe}`
    })
    
    asideImg4.addEventListener('click', function () {
        i = 3
        classicPic.src = asideImg4.src
        classicDescription.innerHTML = `${tortaSelvaNegra}`
    })
}


// MOSTRAR MENÚ
const showMenu = (hamburgerId, navId) => {
    const toggle    = document.getElementById('hamburger'),
          nav       = document.getElementById('nav')   
        
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('menu-hamburger', 'main-nav')

// MOSTRAR PASTELES PERSONALIZADOS
if(thematicImg1 && thematicImg2 && thematicImg3 && thematicImg4 && thematicImg5 && thematicImg6 && thematicImg7 && thematicImg8 && thematicImg9 && thematicImg10 && thematicImg11 && thematicImg12 && thematicImg13 && thematicImg14 && thematicImg15 && thematicImg16) {
thematicImg1.addEventListener('click', function () {
    i = 0
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg2.addEventListener('click', function () {
    i = 1
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg3.addEventListener('click', function () {
    i = 2
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg4.addEventListener('click', function () {
    i = 3
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg5.addEventListener('click', function () {
    i = 4
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg6.addEventListener('click', function () {
    i = 5
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg7.addEventListener('click', function () {
    i = 6
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg8.addEventListener('click', function () {
    i = 7
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg9.addEventListener('click', function () {
    i = 8
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg10.addEventListener('click', function () {
    i = 9
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg11.addEventListener('click', function () {
    i = 10
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg12.addEventListener('click', function () {
    i = 11
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg13.addEventListener('click', function () {
    i = 12
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg14.addEventListener('click', function () {
    i = 13
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg15.addEventListener('click', function () {
    i = 14
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})

thematicImg16.addEventListener('click', function () {
    i = 15
    modalPicture.src = thematicImg[i]
    modalBg.classList.add('bg-active')
})
}

if(modalClose){
modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active')
})
}

if(thematicBefore && thematicNext) {
    thematicNext.addEventListener('click', function () {
        i++
        if(i <= thematicImg.length -1) {
            modalPicture.src = thematicImg[i]
        } else {
            i = 0
            modalPicture.src = thematicImg[i]
        }
    })
    
    thematicBefore.addEventListener('click', function () {
        i--
        if(i >= 0) {
            modalPicture.src = thematicImg[i]
        } else {
            i = thematicImg.length - 1
            modalPicture.src = thematicImg[i]
        }
    })
}

if(thematicLeft && thematicRight) {
    thematicRight.addEventListener('click', function () {
        i++
        if(i <= thematicImg.length -1) {
            thematicPic.src = thematicImg[i]
        } else {
            i = 0
            thematicPic.src = thematicImg[i]
        }
    })
    
    thematicLeft.addEventListener('click', function () {
        i--
        if(i >= 0) {
            thematicPic.src = thematicImg[i]
        } else {
            i = thematicImg.length - 1
            thematicPic.src = thematicImg[i]
        }
    })
}

// MOSTRAR DRIP CAKES
if(dripcakeImg1 && dripcakeImg2 && dripcakeImg3 && dripcakeImg4 && dripcakeImg5 && dripcakeImg6 && dripcakeImg7 && dripcakeImg8 && dripcakeImg9 && dripcakeNext && dripcakeBefore && dripcakeLeft && dripcakeRight) {
dripcakeImg1.addEventListener('click', function () {
    i = 0
    modalPicture.src = dripcakeImg[i]
    modalBg.classList.add('bg-active')
})

dripcakeImg2.addEventListener('click', function () {
    i = 1
    modalPicture.src = dripcakeImg[i]
    modalBg.classList.add('bg-active')
})

dripcakeImg3.addEventListener('click', function () {
    i = 2
    modalPicture.src = dripcakeImg[i]
    modalBg.classList.add('bg-active')
})

dripcakeImg4.addEventListener('click', function () {
    i = 3
    modalPicture.src = dripcakeImg[i]
    modalBg.classList.add('bg-active')
})

dripcakeImg5.addEventListener('click', function () {
    i = 4
    modalPicture.src = dripcakeImg[i]
    modalBg.classList.add('bg-active')
})

dripcakeImg6.addEventListener('click', function () {
    i = 5
    modalPicture.src = dripcakeImg[i]
    modalBg.classList.add('bg-active')
})

dripcakeImg7.addEventListener('click', function () {
    i = 6
    modalPicture.src = dripcakeImg[i]
    modalBg.classList.add('bg-active')
})

dripcakeImg8.addEventListener('click', function () {
    i = 7
    modalPicture.src = dripcakeImg[i]
    modalBg.classList.add('bg-active')
})

dripcakeImg9.addEventListener('click', function () {
    i = 8
    modalPicture.src = dripcakeImg[i]
    modalBg.classList.add('bg-active')
})

if(dripcakeBefore && dripcakeNext) {
    dripcakeNext.addEventListener('click', function () {
        i++
        if(i <= dripcakeImg.length -1) {
            modalPicture.src = dripcakeImg[i]
        } else {
            i = 0
            modalPicture.src = dripcakeImg[i]
        }
    })
    
    dripcakeBefore.addEventListener('click', function () {
        i--
        if(i >= 0) {
            modalPicture.src = dripcakeImg[i]
        } else {
            i = dripcakeImg.length - 1
            modalPicture.src = dripcakeImg[i]
        }
    })
}

if(dripcakeLeft && dripcakeRight) {
    dripcakeRight.addEventListener('click', function () {
        i++
        if(i <= dripcakeImg.length -1) {
            dripcakePic.src = dripcakeImg[i]
        } else {
            i = 0
            dripcakePic.src = dripcakeImg[i]
        }
    })
    
    dripcakeLeft.addEventListener('click', function () {
        i--
        if(i >= 0) {
            dripcakePic.src = dripcakeImg[i]
        } else {
            i = dripcakeImg.length - 1
            dripcakePic.src = dripcakeImg[i]
        }
    })
}
}