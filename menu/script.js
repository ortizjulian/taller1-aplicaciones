function scrollSeccion(idSeccion) {
    var seccion = document.getElementById(idSeccion);

    if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
    }
}