// INICIAR FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyCtCgHi38HE4mD632F4FAo5ApSn4Aho8s4",
    authDomain: "formulario-cotizar-d-bocados.firebaseapp.com",
    projectId: "formulario-cotizar-d-bocados",
    storageBucket: "formulario-cotizar-d-bocados.appspot.com",
    messagingSenderId: "1052168916011",
    appId: "1:1052168916011:web:14f462b666867ac8b32e6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // REFERENCIA DE BASE DE DATOS
  var orderInfo = firebase.database().ref("Nuevos Pedidos")

  orderForm.addEventListener('submit', submitForm)

  function submitForm (e) {
    e.preventDefault()  
    
    var orderName           = document.getElementById('orderName').value,
    orderEmail              = document.getElementById('orderEmail').value,
    orderPhone              = document.getElementById('orderPhone').value,
    typeofcake              = document.getElementById('typeOfCake').value,
    classicCakeOrder        = document.getElementById('classicCakeOrder').value,
    thematicFlavorOrder     = document.getElementById('thematicFlavorOrder').value,
    thematicFillingOrder    = document.getElementById('thematicFillingOrder').value,
    thematicThemeOrder      = document.getElementById('thematicThemeOrder').value,
    thematicNameOrder       = document.getElementById('thematicNameOrder').value,
    thematicColorOrder      = document.getElementById('thematicColorOrder').value,
    thematicFondantOrder    = document.getElementById('thematicFondantOrder').value,
    dripcakeFlavorOrder     = document.getElementById('dripcakeFlavorOrder').value,
    dripcakeFillingOrder    = document.getElementById('dripcakeFillingOrder').value,
    dripcakeName            = document.getElementById('dripcakeName').value,
    dripcakeColorOrder      = document.getElementById('dripcakeColorOrder').value,
    dripcakeDecorationOrder = document.getElementById('dripcakeDecorationOrder'),
    peopleOrder             = document.getElementById('peopleOrder').value,
    dateOrder               = document.getElementById('dateOrder').value,
    orderSent               = document.getElementById('orderSent'),
    orderForm               = document.getElementById('orderForm')

    saveOrder(orderName, orderEmail, orderPhone, typeofcake, classicCakeOrder, thematicFlavorOrder, thematicFillingOrder, thematicThemeOrder, thematicNameOrder, thematicColorOrder, thematicFondantOrder, dripcakeFlavorOrder, dripcakeFillingOrder, dripcakeName, dripcakeColorOrder, dripcakeDecorationOrder, peopleOrder, dateOrder)

    orderSent.style.display = 'block'
    orderForm.style.display = 'none'
    
    setTimeout(function () {
      
      orderSent.style.display = 'none'      
      orderForm.reset()
      orderForm.style.display = 'block'      

    },5000)
  }

  // SAVE ORDER TO FIREBASE
  function saveOrder(orderName, orderEmail, orderPhone, typeofcake, classicCakeOrder, thematicFlavorOrder, thematicFillingOrder, thematicThemeOrder, thematicNameOrder, thematicColorOrder, thematicFondantOrder, dripcakeFlavorOrder, dripcakeFillingOrder, dripcakeName, dripcakeColorOrder, dripcakeDecorationOrder, peopleOrder, dateOrder) {

    var newOrderInfo = orderInfo.push()
    
    newOrderInfo.set({
      orderName               : orderName,
      orderEmail              : orderEmail, 
      orderPhone              : orderPhone, 
      typeofcake              : typeofcake, 
      classicCakeOrder        : classicCakeOrder, 
      thematicFlavorOrder     : thematicFlavorOrder, 
      thematicFillingOrder    : thematicFillingOrder, 
      thematicThemeOrder      : thematicThemeOrder, 
      thematicNameOrder       : thematicNameOrder, 
      thematicColorOrder      : thematicColorOrder, 
      thematicFondantOrder    : thematicFondantOrder, 
      dripcakeFlavorOrder     : dripcakeFlavorOrder, 
      dripcakeFillingOrder    : dripcakeFillingOrder, 
      dripcakeName            : dripcakeName, 
      dripcakeColorOrder      : dripcakeColorOrder, 
      dripcakeDecorationOrder : dripcakeDecorationOrder, 
      peopleOrder             : peopleOrder, 
      dateOrder               : dateOrder
    })
  }

  function selectTypeOfCake() {
    var selecttoc = document.querySelector('.type-of-cake'),
        classicWrapp = document.querySelector('.classic-wrapp'),
        thematicWrapp = document.querySelector('.thematic-wrapp'),
        dripcakeWrapp = document.querySelector('.dripcake-wrapp')

    if(selecttoc.value == 'Clásico'){
      classicWrapp.classList.add('cake-option')
      thematicWrapp.classList.remove('cake-option')
      dripcakeWrapp.classList.remove('cake-option')

    }else if(selecttoc.value == 'Personalizado'){

      classicWrapp.classList.remove('cake-option')
      thematicWrapp.classList.add('cake-option')
      dripcakeWrapp.classList.remove('cake-option')

    }else if(selecttoc.value == 'Drip Cake'){

      classicWrapp.classList.remove('cake-option')
      thematicWrapp.classList.remove('cake-option')
      dripcakeWrapp.classList.add('cake-option')

    }
  }