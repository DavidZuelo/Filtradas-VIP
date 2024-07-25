document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


// CONTENIDO VIP CONTRASEÑAS

document.getElementById("autoform").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    var password = document.getElementById("password").value;

    // Aquí puedes definir las páginas a las que quieres redirigir según la contraseña
    var pageMap = {
    "filtradasvipA1": "contenido-vip/01.html",
    "filtradasvipB2": "contenido-vip/02.html",
    "filtradasvipC3": "contenido-vip/03.html",
    "filtradasvipD4": "contenido-vip/04.html",
    "filtradasvipE5": "contenido-vip/05.html",
    "filtradasvipF6": "contenido-vip/06.html",
    "filtradasvipG7": "contenido-vip/07.html",
    "filtradasvipH8": "contenido-vip/08.html",
    "filtradasvipI9": "contenido-vip/09.html",
    "filtradasvipJ10": "contenido-vip/10.html",
    "filtradasvip01A": "contenido-vip/11.html",
      // Agrega más contraseñas y páginas según sea necesario
    };

    // Verificar si la contraseña ingresada está en el mapa de páginas
    if (password in pageMap) {
    var nextPage = pageMap[password];
      window.location.href = nextPage; // Redirigir a la página correspondiente
    } else {
      // Contraseña incorrecta, mostrar un mensaje de error
    alert("Contraseña incorrecta. Inténtelo de nuevo.");
      document.getElementById("password").value = ""; // Limpiar el campo de contraseña
    }
});




