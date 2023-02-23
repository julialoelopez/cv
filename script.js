function cambiarFondo(sectionID, color){
    var elemento = document.getElementById(sectionID);
    elemento.style.backgroundColor = color;
    elemento.style.transition = 'all 0.2s ease-in';
}
function cambiarIcono(sectionID, sectionID2, colorFondo, color, fuente){
    document.getElementById(sectionID).style.backgroundColor = colorFondo;
    document.getElementById(sectionID2).style.color = color;
    document.getElementById(sectionID2).style.fontFamily = fuente;
}