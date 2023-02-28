function ampliarImagen(imagen) {
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    var img = document.createElement('img');
img.src = imagen;
img.style.maxWidth = '90%';
img.style.maxHeight = '90%';

modal.appendChild(img);

document.body.appendChild(modal);

// Función para cerrar la imagen al hacer clic en ella

img.onclick = function() {
    document.body.removeChild(modal);
}
}
window.onscroll = function() {
    var botonVolverArriba = document.getElementById('volver-arriba');
    if (document.documentElement.scrollTop > 100) {
        botonVolverArriba.style.display = 'block';
    } else {
        botonVolverArriba.style.display = 'none';
    }
}

// Función para volver al inicio de la página al hacer clic en el botón

function volverArriba() {
document.documentElement.scrollTop = 0;
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "images/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "images/close_white_36dp.svg";
    }
}