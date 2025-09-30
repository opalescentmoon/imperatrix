// product table
const itemProducts = {
  productTribbie: {
    id: 'productTribbie',
    name: 'Tribbie',
    img: 'Character_Tribbie_Portrait.png',
    desc: '"The whispers of the soul shatter into thousands of pieces and fly away."',
    song: 'song/Arcahv.mp3',
    top: '0',
    left: '0',
    transform: 'scale(6) translateX(75%) translateY(30%)',
    width: '100%',
    height: 'auto',
    axis: 'Creation',
    brightness: '1',
  },
  productHyacine: {
    id: 'productHyacine',
    name: 'Hyacine',
    img: 'Character_Hyacine_Portrait.png',
    desc: `"May our journey's end be one without darkness."`,
    song: 'song/Tempestissimo.mp3',
    top: '0',
    left: '0',
    transform: 'scale(12) translateX(25%) translateY(40%)',
    width: '100%',
    height: 'auto',
    axis: 'Dedication',
    brightness: '1',
  },
    productMydei: {
    id: 'productMydei',
    name: 'Mydei',
    img: 'Character_Mydei_Portrait.png',
    desc: '"Strife will not cease with victory."',
    song: 'song/Infinite Strife,.mp3',
    top: '0',
    left: '0',
    transform: 'scale(12) translateX(48%) translateY(30%)',
    width: '100%',
    height: 'auto',
    axis: 'Execution',
    brightness: '1',
  },
  productCipher: {
    id: 'productCipher',
    name: 'Cipher',
    img: 'Character_Cipher_Portrait.png',
    desc: '"Lies and truths are nothing before the weight of sincerity."',
    song: 'song/1f1e33.mp3',
    top: '0',
    left: '0',
    transform: 'scale(7) translateX(65%) translateY(45%)',
    width: '100%',
    height: 'auto',
    axis: 'Vengeance',
    brightness: '1',
  },
  productHysilens: {
    id: 'productHysilens',
    name: 'Hysilens',
    img: 'Character_Hysilens_Portrait.png',
    desc: '"Though the ripples are fleeting, they converge into waves."',
    song: 'song/Grievous Lady.mp3',
    top: '0',
    left: '0',
    transform: 'scale(9) translateX(53%) translateY(65%)',
    width: '100%',
    height: 'auto',
    axis: 'Contemplation',
    brightness: '1',
  },
  productCastorice: {
    id: 'productCastorice',
    name: 'Castorice',
    img: 'Character_Castorice_Portrait.png',
    desc: '"All things cycle through life and death... The end is also the beginning."',
    song: 'song/Xanatos.mp3',
    top: '0',
    left: '0',
    transform: 'scale(9) translateX(45%) translateY(30%)',
    width: '100%',
    height: 'auto',
    axis: 'Despondency',
    brightness: '1',
  },
  productAnaxa: {
    id: 'productAnaxa',
    name: 'Anaxa',
    img: 'Character_Anaxa_Portrait.png',
    desc: '"Truth is already in my hands."',
    song: 'song/Axium Crisis.mp3',
    top: '0',
    left: '0',
    transform: 'scale(8) translateX(50%) translateY(40%)',
    width: '100%',
    height: 'auto',
    axis: 'Escapism',
    brightness: '1',
  },
  productCerydra: {
    id: 'productCerydra',
    name: 'Cerydra',
    img: 'Character_Cerydra_Portrait.png',
    desc: '"This is not the end, merely the cornerstone of a grand endeavor."',
    song: 'song/Testify (feat. 星熊南巫).mp3',
    top: '0',
    left: '0',
    transform: 'scale(12) translateX(45%) translateY(55%)',
    width: '100%',
    height: 'auto',
    axis: 'Determination',
    brightness: '1',
  },
  productAglaea: {
    id: 'productAglaea',
    name: 'Aglaea',
    img: 'Character_Aglaea_Portrait.png',
    desc: '"Even the most majestic epics are woven from individual words."',
    song: 'song/Lament Rain.mp3',
    top: '0',
    left: '0',
    transform: 'scale(16) translateX(22%) translateY(52%)',
    width: '100%',
    height: 'auto',
    axis: 'Optimism',
    brightness: '1',
  },
  productPhainon: {
    id: 'productPhainon',
    name: 'Phainon',
    img: 'Character_Phainon_Portrait.png',
    desc: '"We will eventually become the flames that light up the new world."',
    song: 'song/Aegleseeker.mp3',
    top: '0',
    left: '0',
    transform: 'scale(8) translateX(62%) translateY(30%)',
    width: '100%',
    height: 'auto',
    axis: 'Conclusion',
    brightness: '1',
  },
  productCyrene: {
    id: 'productCyrene',
    name: '???',
    img: 'Character_Cyrene_Splash_Art.png',
    desc: '???',
    song: 'song/Arghena.mp3',
    top: '0',
    left: '0',
    transform: 'scale(18) translateX(24%) translateY(37%)',
    width: '100%',
    height: 'auto',
    axis: '???',
    brightness: '0',
  },
};

//dynamic checkout 
function updateCartBadge(count) {
  const badge = document.querySelector('.cart-badge');
  if (badge) badge.textContent = count;
}

function addToCart(productId) {
    const product = itemProducts[productId]
    console.log("Adding product with ID:", product);
    let cart = localStorage.getItem('cart') || '';
    let count = parseInt(localStorage.getItem('cartCount') || '0');

    if (!cart) {
        cart = '';  // Initialize cart if it's empty
    }

    if (product) {

        cart += `${product.id},`;

        count++;

        localStorage.setItem('cartCount', count);
        localStorage.setItem('cart', cart);

        updateCartBadge(count);

        loadCartItems();

    } else {
        console.error('Product not found');
    }
    
}

function removeFromCart(productID) {
    let cart = localStorage.getItem('cart') || '';
    let count = parseInt(localStorage.getItem('cartCount') || '0');

    if (!cart || cart === '') {
        console.error('Waiting list is empty');
        return;
    }

    cart = cart.replace(`${productID},`, ''); 

    count = Math.max(count - 1, 0);  // Ensure count doesn't go below zero

    localStorage.setItem('cartCount', count);
    localStorage.setItem('cart', cart);

    updateCartBadge(count);

    loadCartItems();
}

function loadCartItems() {
    let cart = localStorage.getItem('cart') || '';

    const cartItemsCont = document.getElementById('cart-items');
    if (cartItemsCont) {
        cartItemsCont.innerHTML = ``

        if (!cart || cart === '') {
        cartItemsCont.innerHTML = '<li>Your waiting list is empty!</li>';
        return;

    }
    } else {
        console.warn('cart item not found')
    }

    

    const productIDs = cart.split(',').filter(id => id);

    productIDs.forEach((id) => {
        if (id) { 
            const product = itemProducts[id]; 
            if (product) {
                const itemList = document.createElement('li');
                itemList.innerHTML = `<button onclick='removeFromCart("${id}")'><p>X</p></button></p> <p class='checkout-text'>${product.name}`;
                
                if (cartItemsCont) {
                    cartItemsCont.appendChild(itemList);
                } else {
                    console.warn('cart item not found')
                }
            }
        }
    });
}

function clearCart() {
    localStorage.removeItem('cart')
    localStorage.removeItem('cartCount')
    updateCartBadge(0)
    loadCartItems()
}

document.addEventListener('DOMContentLoaded', () => {
  const count = parseInt(localStorage.getItem('cartCount') || '0');
  updateCartBadge(count);
  loadCartItems();
});

//disable scrolling
function enableBodyScroll() {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

function disableBodyScroll() {
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}


//toggle menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//product details button
function showDetails() {
  const details = document.getElementById("product-details");
  toggleDetails(details);
}

function toggleDetails(overlay) {

  const audio = overlay.querySelector('audio');

  const displayState = window.getComputedStyle(overlay).display;

  if (displayState === "none") {
    showOverlay(overlay);
    disableBodyScroll();
  } else {
    hideOverlay(overlay);
    enableBodyScroll();
    audio.pause();
    audio.currentTime = 0;
  }
}

function showOverlay(overlay) {
  overlay.style.display = "flex"; 
  requestAnimationFrame(() => {
    overlay.classList.add("open"); 
  });
}

function hideOverlay(overlay) {
  overlay.classList.remove("open"); 
  setTimeout(() => {
    overlay.style.display = "none"; 
  }, 300); 
}

//show popup successfully recalled to waiting list
function openPopup(popup) {
  popup.style.display = "flex";
  requestAnimationFrame(() => {
    popup.classList.add('open')
  });
}

function hidePopup(popup) {
  popup.classList.remove("open"); 
  setTimeout(() => {
    popup.style.display = "none"; 
  }, 300); 
}

function togglePopup(popup) {

  const isOpen = popup.classList.contains('open');

    if (isOpen) {
    hidePopup(popup);
  } else {
    openPopup(popup);
    setTimeout(function() {
      hidePopup(popup);
    }, 2000); // Automatically hide after 3 seconds
  }
}

function showPopup() {
  const popupElement = document.querySelector('.popup');
  togglePopup(popupElement);
}

// different product details for each button
function showProductDetails(productId) {
  const productItem = itemProducts[productId]
  console.log('Clicked:', productId);

  document.getElementById('product-details-img').innerHTML = `
  <img 
  src="${productItem.img}" 
  alt="${productItem.name}" 
  style="
    top: ${productItem.top};
    left: ${productItem.left};
    width: ${productItem.width};
    transform: ${productItem.transform};
    height: ${productItem.height};
    filter: brightness(${productItem.brightness});
  ">
  `;
  document.getElementById('product-details-text').innerHTML = `
    <h1>${productItem.name}</h1>
    <p>${productItem.desc}</p>
    <h5>Axis: ${productItem.axis}</h5>
  `;
  document.getElementById('product-details-aud').innerHTML =     
  `<audio controls autoplay loop>
      <source src="${productItem.song}" type="audio/mpeg">
    </audio>`
  const addToCartButton = document.querySelector('.buy-button');
  addToCartButton.dataset.productId = productItem.id;

  addToCartButton.onclick = () => {
    console.log('added to cart ', productItem.id)
    addToCart(productItem.id);
    showDetails();               
    showPopup();                 
  };

  showDetails();
}




