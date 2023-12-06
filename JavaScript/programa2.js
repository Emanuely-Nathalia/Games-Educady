function TrocaPalavra () {
    Digitada = document.getElementById("palavra").value 
    document.getElementById("palavra1").innerHTML = Digitada
    document.getElementById("palavra2").innerHTML = Digitada
    document.getElementById("palavra3").innerHTML = Digitada
    document.getElementById("palavra4").innerHTML = Digitada
    document.getElementById("palavra5").innerHTML = Digitada
}
function TrocaPalavra2() {
    var palavra = document.getElementsByTagName("strong")
    Digitada = document.getElementById("palavra").value 

    console.log (palavra.length)
    
    for (i=0; i <= palavra.length; i++) {
        palavra [i].innerHTML = Digitada
    }

}

// Seleção de Personagens
function changeCharacter() {
    var selectedCharacter = document.getElementById('character');
    var selectedImg = selectedCharacter.options[selectedCharacter.selectedIndex].getAttribute('data-img');
    document.getElementById('selected-character-img').src = selectedImg;
}