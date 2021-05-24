function changeImage(anything) {
    document.querySelector('.antenas').src = anything;
};

//  Typed with Lyrics
var typed = new Typed('.typing', {
    strings: ["Xumak", "", "Xumak-Wireless"],
    typeSpeed: 100,
    backDelay: 5000,
    backSpeed: 100,
    loop: true,
});

// -------------------------------------------------------
const BotonCookie = document.getElementById('btn_cookie');
const Cookies = document.getElementById('cookies');
const Fondo = document.getElementById('fondo');

dataLayer = [];

if (!localStorage.getItem('Cookies_Aceptado')) {
    Fondo.classList.add('activo');
    Cookies.classList.add('activo');
} else {
    dataLayer.push({
        'event': 'Cookies_Aceptado'
    });
}


BotonCookie.addEventListener('click', () => {
    Cookies.classList.remove('activo');
    Fondo.classList.remove('activo');

    localStorage.setItem('Cookies_Aceptado', true);

    dataLayer.push({
        'event': 'Cookies_Aceptado'
    });

});