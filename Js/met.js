var immagini = ["img/imm.jpg", "img/pizza.jpg"];
var index = 0;

function cambiaImmagine() {
    document.getElementById('image' + immagini[index]).style.display = 'none';
    index += 1;
    document.getElementById('image' + immagini[index]).style.display = 'block';
}